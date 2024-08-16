package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ParkingAreaDTO;
import com.app.entities.ParkingArea;
import com.app.enums.Status;
import com.app.service.ParkingAreaService;

@RestController
@RequestMapping("/parkingArea")
@CrossOrigin(origins = "*")
public class ParkingAreaController {

	@Autowired
	private ParkingAreaService parkingAreaService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addParkingArea(@RequestBody ParkingAreaDTO parking){
		parkingAreaService.addParkingArea(parking);
		return ResponseEntity.status(HttpStatus.OK).body("Parking area added !!");
	}
	
	@GetMapping("/nearby")
    public ResponseEntity<List<ParkingAreaDTO>> findNearbyParking(@RequestParam double latitude,@RequestParam double longitude) {
        
        List<ParkingAreaDTO> nearbyParkingAreas = parkingAreaService.findNearbyParking(latitude, longitude, 3.0);
        return ResponseEntity.ok(nearbyParkingAreas);
    }
	
	//for admin
	@GetMapping("/byStatus")
    public ResponseEntity<List<ParkingAreaDTO>> getParkingAreasByStatus(@RequestParam String status) {
        List<ParkingAreaDTO> parkingAreas = parkingAreaService.findParkingAreaByStatus(Status.valueOf(status));
        return ResponseEntity.ok(parkingAreas);
    }
	
}
