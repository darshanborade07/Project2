package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import org.hibernate.annotations.CreationTimestamp;
import org.springframework.beans.factory.annotation.Autowired;

import com.app.enums.BookingStatus;
import com.app.enums.VehicleType;

import lombok.ToString;

@Entity
@Table(name = "bookings")

@ToString
public class Booking extends BaseEntity{
	
	@CreationTimestamp
	@Column(name = "booking_date", nullable = false)
	private LocalDate bookingDate;
	
	@Column(name = "arrival_date", nullable = false)
	private LocalDateTime arrivalDate;
	
	@Column(name = "departure_date", nullable = false)
	private LocalDateTime departureDate;

	@Column(name = "vehicle_no", nullable = false)
	private String vehicleNo;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "vehicle_type", nullable = false)
	private VehicleType VehicleType;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "booking_status", nullable = false)
	private BookingStatus status;
	
	@Column(name = "parking_hours", nullable = false)
	private int parkingHours;
	
	@Column(nullable = false)
	private double price;
	

	@ManyToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name = "customer_id", nullable = false)
	private User user;
	
	@OneToOne
	@JoinColumn(name = "parking_slot_id", nullable = false)
	private ParkingSlot parkingSlot;

	public Booking() {
		super();
	}

	public Booking(LocalDate bookingDate, LocalDateTime arrivalDate, LocalDateTime departureDate, String vehicleNo,
			com.app.enums.VehicleType vehicleType, BookingStatus status, int parkingHours, double price) {
		super();
		this.bookingDate = bookingDate;
		this.arrivalDate = arrivalDate;
		this.departureDate = departureDate;
		this.vehicleNo = vehicleNo;
		VehicleType = vehicleType;
		this.status = status;
		this.parkingHours = parkingHours;
		this.price = price;
	}

	public LocalDate getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}

	public LocalDateTime getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(LocalDateTime arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public LocalDateTime getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(LocalDateTime departureDate) {
		this.departureDate = departureDate;
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

	public BookingStatus getStatus() {
		return status;
	}

	public void setStatus(BookingStatus status) {
		this.status = status;
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