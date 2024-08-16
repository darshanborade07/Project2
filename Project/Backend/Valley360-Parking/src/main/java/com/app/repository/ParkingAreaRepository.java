package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ParkingArea;
import com.app.enums.Status;

public interface ParkingAreaRepository extends JpaRepository<ParkingArea, Long> {

	List<ParkingArea> findByStatus(Status status);

}
