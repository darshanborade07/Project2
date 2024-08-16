package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.enums.RoleEnum;
import com.app.service.UserService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class AdminController {

	@Autowired
	UserService userService;
	
	@GetMapping("/findByRole")
	public ResponseEntity<List<UserDTO>> findByRole(@RequestParam String role){
		List<UserDTO> users = userService.findByRole(RoleEnum.valueOf(role));
		return ResponseEntity.status(HttpStatus.OK).body(users);
	}
}
