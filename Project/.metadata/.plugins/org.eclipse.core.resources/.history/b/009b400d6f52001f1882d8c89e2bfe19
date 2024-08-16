package com.app.dto;

import com.app.enums.Status;
import com.app.enums.VehicleType;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ParkingSlotDTO extends BaseDTO {

	private VehicleType vehicleType;
	private Status status;
	private double price;
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long parkingId;
}
