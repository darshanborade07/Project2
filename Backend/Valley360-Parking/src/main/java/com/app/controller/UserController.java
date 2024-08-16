package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.entities.User;
import com.app.enums.RoleEnum;
import com.app.service.UserService;

@RestController
@RequestMapping("/User")
@CrossOrigin(origins = "*") /*This is useful when you want to make a resource accessible from different domains, 
					such as when your frontend and backend are hosted on different domains. */
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/Register")
	public ResponseEntity<?> registerUser(@RequestBody UserDTO user) {
		userService.registerUser(user);
		return ResponseEntity.status(HttpStatus.OK).body("User is created");
	}
	
	@GetMapping("/getByEmail/{email}")
	public ResponseEntity<?> getUserByEmail(@PathVariable String email){
		return new ResponseEntity<>(userService.getUserByEmail(email), HttpStatus.FOUND);
	}
	
	@PutMapping("/updateUser/{email}")
	public User updateUser(@RequestBody User user, @PathVariable String email){
		return userService.updateUser(user, email);
	}
	
	@PostMapping("/Login")
	public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
        User user = userService.login(email, password);
        
        return ResponseEntity.ok(user);
    }
	@GetMapping("/{id}")
	public User GetById(@PathVariable long id) {
	System.out.println("in user controller");
		return userService.getById(id);
	}
	@GetMapping("/GetAllOwners")
	public List<User> GetAllOwners(){
		List<User> UserList=userService.GetAllOwner();
		return UserList;
	}
	
	@GetMapping("/GetAllCustomers")
	public List<User> GetAllCustomers(){
		List<User> UserList=userService.GetAllCustomers();
		return UserList;
	}
	
	@DeleteMapping("Delete/{id}")
	public ResponseEntity<?> DeleteUser(@PathVariable Long id){
		
		userService.Delete(id);
		return ResponseEntity.ok("UserDeleted");
	}
	
}
