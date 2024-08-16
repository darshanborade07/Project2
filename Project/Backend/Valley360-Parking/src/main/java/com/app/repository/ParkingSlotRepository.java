package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.ParkingSlot;

public interface ParkingSlotRepository extends JpaRepository<ParkingSlot, Long> {

//	@Query("SELECT * FROM ParkingSlot where parking")
//	public List<ParkingSlot> getParkingSlots();
	
}
