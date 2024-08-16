package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

import com.app.entities.ParkingSlot;
import com.app.entities.User;
import com.app.enums.BookingStatus;
import com.app.enums.VehicleType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BookingDTO extends BaseDTO{
	
	@CreationTimestamp
	private LocalDate bookingDate;

	private LocalDateTime arrivalDate;
	
	private LocalDateTime departureDate;
	
	private String vehicleNo;
	
	private VehicleType VehicleType;
	
	private BookingStatus status;
	
	private int parkingHours;
	
	private double price;

	private Long customer_id;

	private Long parking_slot_id;
	
}