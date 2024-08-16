package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
public class User extends BaseEntity {
	
	@Column(length = 30, nullable = false)
	private String email;
	
	@Column(length = 30,nullable = false)
	private String password;
	
	@Column(name = "first_name",length = 30, nullable = false)
	private String firstName;
	
	@Column(name = "last_name", length = 30,nullable = false)
	private String lastName;
	
	@Column(length = 30,nullable = false)
	private String contact;
	
	@Column(length = 25,nullable = false)
	private String gender;
	
	@Column(length = 30,nullable = false)
	private String address;

	@OneToOne
	@JoinColumn(name = "role_id",nullable = false)
	private Role role;

	public User() {
		super();
	}

	public User(String email, String password, String firstName, String lastName, String contact, String gender,
			String address) {
		super();
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contact = contact;
		this.gender = gender;
		this.address = address;
	}

	

}