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

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public String getVehicleNo() {
		return vehicleNo;
	}

	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}

	public VehicleType getVehicleType() {
		return VehicleType;
	}

	public void setVehicleType(VehicleType vehicleType) {
		VehicleType = vehicleType;
	}

	public int getParkingHours() {
		return parkingHours;
	}

	public void setParkingHours(int parkingHours) {
		this.parkingHours = parkingHours;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ParkingSlot getParkingSlot() {
		return parkingSlot;
	}

	public void setParkingSlot(ParkingSlot parkingSlot) {
		this.parkingSlot = parkingSlot;
	}
	
	
}
