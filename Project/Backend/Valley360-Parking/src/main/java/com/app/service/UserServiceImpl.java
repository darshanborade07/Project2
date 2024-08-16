package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.UserDTO;
import com.app.entities.Role;
import com.app.entities.User;
import com.app.enums.RoleEnum;
import com.app.exception.InvalidIdFoundException;
import com.app.exception.UserAlreadyExistsException;
import com.app.exception.UserNotFoundException;
import com.app.repository.RoleRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
		
	@Autowired
	private ModelMapper mapper;

	@Override
	public User registerUser(UserDTO userDTO) {
        // Check if the role exists
        Role role = roleRepository.findById(userDTO.getRoleId())
            .orElseThrow(() -> new InvalidIdFoundException("Invalid role ID !!"));

        // Check if the user already exists
        if (userAlreadyExists(userDTO.getEmail())) {
            throw new UserAlreadyExistsException(userDTO.getEmail() + " already exists !");
        }

        // Map UserDTO to User entity
        User newUser = mapper.map(userDTO, User.class);

        // Set the role to the user
        newUser.setRole(role);

        // Save and return the new user
        return userRepository.save(newUser);
    }

	private boolean userAlreadyExists(String email) {
		
		return userRepository.findByEmail(email).isPresent();
	}

	@Override
	public User updateUser(User user, String email) {
		
		return userRepository.findByEmail(email).map(u -> {
			u.setFirstName(user.getFirstName());
			u.setLastName(user.getLastName());
			u.setContact(user.getContact());
			u.setAddress(user.getAddress());
			return userRepository.save(u);
		}).orElseThrow(() -> new UserNotFoundException("User could not be found !"));
	}

	@Override
	public User getUserByEmail(String email) {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email).orElseThrow(() -> new UserNotFoundException("No user found with the email :"+email));
	}

	@Override
	public void deleteUser(String email) {
		
	}

	@Override
	public User login(String email, String password) {
		User user = userRepository.findByEmail(email).orElseThrow(() -> new InvalidIdFoundException("Invalid id !!"));
		if(user != null && (password.equals(user.getPassword()))) {
			return user;
			
		}
		throw new RuntimeException("Invalid email or password");
	}

	@Override
	public List<UserDTO> findByRole(RoleEnum role) {
		List<User> users = userRepository.findByRole(role);
		return users.stream()
                .map(user -> mapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
	}
	
	
	
	
}
