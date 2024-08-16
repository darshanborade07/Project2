package com.app.dto;

import com.app.entities.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {

	private String email;
	@JsonIgnore /* @JsonIgnore prevents that field or property from being serialized (converted into JSON)
	 				and deserialized (converted from JSON) when converting Java objects to and from JSON.*/
	private String password;
	private String firstName;
	private String lastName;
	private String contact;
	private String gender;
	private String address;
	private Role role;
		
}
