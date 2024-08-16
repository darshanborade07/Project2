package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ParkingSlotDTO;
import com.app.entities.ParkingArea;
import com.app.entities.ParkingSlot;
import com.app.exception.UserNotFoundException;
import com.app.repository.ParkingAreaRepository;
import com.app.repository.ParkingSlotRepository;

@Service
@Transactional
public class ParkingSlotServiceImpl implements ParkingSlotService {

	@Autowired
	private ParkingSlotRepository parkingSlotRepository;
	
	@Autowired
	private ParkingAreaRepository parkingAreaRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ParkingSlot addNewParkingSlot(ParkingSlotDTO slot) {
		ParkingArea area = parkingAreaRepository.findById(slot.getParkingId())
				.orElseThrow(() -> new UserNotFoundException("Invalid id !!"));
		
		ParkingSlot parkingSlot = mapper.map(slot, ParkingSlot.class);
		
		parkingSlot.setParking(area);
		
		return parkingSlotRepository.save(parkingSlot);
	}

//	@Override
//	public List<ParkingSlot> viewParkingSlot(Long id) {
////		ParkingArea area = parkingAreaRepository.findById(id).orElseThrow(() -> new ParkingNotFoundException("parking not found !!"));
//		
//		
//		return null;
//	}
	@Override
	public List<ParkingSlotDTO> getParkingSlotsByParkingArea(Long parkingAreaId) {
        ParkingArea parkingArea = parkingAreaRepository.findById(parkingAreaId)
                .orElseThrow(() -> new RuntimeException("Parking area not found"));

        return parkingArea.getParkingSlots().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private ParkingSlotDTO convertToDTO(ParkingSlot parkingSlot) {
        ParkingSlotDTO dto = new ParkingSlotDTO();
        dto.setId(parkingSlot.getParking().getId());
        dto.setVehicleType(parkingSlot.getVehicleType());
        dto.setStatus(parkingSlot.getStatus());
        dto.setParkingId(parkingSlot.getParking().getId());
        return dto;
    }

}
