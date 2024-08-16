package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.app.enums.Status;
import com.app.enums.VehicleType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "parking_slots")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class ParkingSlot extends BaseEntity {
	
	@Enumerated(EnumType.STRING)
	private VehicleType vehicleType;
	@Enumerated(EnumType.STRING)
	private Status status;
	private double price;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parking_id")
	private ParkingArea parking;

	public ParkingSlot(VehicleType vehicleType, Status status) {
		super();
		this.vehicleType = vehicleType;
		this.status = status;
	}
	
	
	
}
