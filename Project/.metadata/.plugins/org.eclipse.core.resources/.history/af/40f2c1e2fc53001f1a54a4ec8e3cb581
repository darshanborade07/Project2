package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.User;
import com.app.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*") /*This is useful when you want to make a resource accessible from different domains, 
					such as when your frontend and backend are hosted on different domains. */
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		userService.registerUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).body("User is created");
	}
	
	@GetMapping("/getByEmail/{email}")
	public ResponseEntity<?> getUserByEmail(@PathVariable String email){
		return new ResponseEntity<>(userService.getUserByEmail(email), HttpStatus.FOUND);
	}
	
	@PutMapping("/updateUser/{email}")
	public User updateUser(@RequestBody User user, @PathVariable String email){
		return userService.updateUser(user, email);
	}
	
}
