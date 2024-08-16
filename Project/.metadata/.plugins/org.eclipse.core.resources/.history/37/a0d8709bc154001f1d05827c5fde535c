package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDTO;
import com.app.service.BookingService;

@RestController
@RequestMapping("/booking")
@CrossOrigin("*")
public class BookingController {

	@Autowired
	private BookingService bookingService;
	
	@PostMapping
	public ResponseEntity<?> bookParkingSlot(@RequestBody BookingDTO dto){
		bookingService.bookParkingSlot(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body("Parking slot booked successfully!!");
	}
}
