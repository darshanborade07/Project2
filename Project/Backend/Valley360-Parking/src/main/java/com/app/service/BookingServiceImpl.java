package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.BookingDTO;
import com.app.entities.Booking;
import com.app.entities.ParkingSlot;
import com.app.entities.User;
import com.app.exception.ParkingNotFoundException;
import com.app.exception.UserNotFoundException;
import com.app.repository.BookingRepository;
import com.app.repository.ParkingSlotRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

	@Autowired
	private BookingRepository bookingRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ParkingSlotRepository parkingSlotRepo;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public void bookParkingSlot(BookingDTO booking) {
		
		User user = userRepo.findById(booking.getCustomerId())
				.orElseThrow(() -> new UserNotFoundException("Invalid id !!"));
		
		ParkingSlot parkingSlot = parkingSlotRepo.findById(booking.getParkingSlotId())
				.orElseThrow(() -> new ParkingNotFoundException("Invalid id !!"));
		
		
		Booking book = mapper.map(booking, Booking.class);
		
		book.setUser(user);
		book.setParkingSlot(parkingSlot);
		
		bookingRepo.save(book);
		
	}

	@Override
	public List<Booking> viewBookingHistory(Long id) {
		bookingRepo.findById(id);
		return null;
	}
	
	
	
}
