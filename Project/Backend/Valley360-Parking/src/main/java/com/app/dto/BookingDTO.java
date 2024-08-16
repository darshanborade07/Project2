package com.app.dto;

import java.time.LocalDateTime;

import com.app.enums.VehicleType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@ToString
public class BookingDTO {

	private LocalDateTime date;
	private String vehicleNo;
	private VehicleType VehicleType;
	private int parkingHours;
	private double price;
	
	private Long customerId;
	
	private Long parkingSlotId;

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

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public Long getParkingSlotId() {
		return parkingSlotId;
	}

	public void setParkingSlotId(Long parkingSlotId) {
		this.parkingSlotId = parkingSlotId;
	}
	
	
	
}
