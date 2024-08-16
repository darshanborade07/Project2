package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
@ToString
@Getter
@Setter
public class ParkingSlot extends BaseEntity {
	

	@Enumerated(EnumType.STRING)
	@Column(name = "vehicle_type", nullable = false)
	private VehicleType vehicleType;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Status status;
	
	@Column(nullable = false)
	private double price;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
	@JoinColumn(name = "parking_id", nullable = false)	
	private ParkingArea parking;
	
	public ParkingSlot() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ParkingSlot(VehicleType vehicleType, Status status) {
		super();
		this.vehicleType = vehicleType;
		this.status = status;
	}

	
	
	
}
