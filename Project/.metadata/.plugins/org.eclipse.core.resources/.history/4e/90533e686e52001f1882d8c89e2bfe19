package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.app.enums.VehicleType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "bookings")
@Getter
@Setter
@ToString
public class Booking extends BaseEntity{

	private LocalDateTime date;
	private String vehicleNo;
	@Enumerated(EnumType.STRING)
	private VehicleType VehicleType;
	private int parkingHours;
	private double price;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private User user;
	
	@OneToOne
	@JoinColumn(name = "parking_slot_id")
	private ParkingSlot parkingSlot;

	public Booking() {
		super();
	}

	public Booking(LocalDateTime date, String vehicleNo, VehicleType vehicleType, int parkingHours, double price) {
		super();
		this.date = date;
		this.vehicleNo = vehicleNo;
		VehicleType = vehicleType;
		this.parkingHours = parkingHours;
		this.price = price;
	}
	
	
}
