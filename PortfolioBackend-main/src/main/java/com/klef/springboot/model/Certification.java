package com.klef.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "certification_table")
public class Certification 
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)	
@Column(name = "certificate_id")
private int id;
@Column(name = "certificate_name",length=300,nullable=false)
private String  name;
@Column(name = "certificate_company",length=300,nullable=false)
private String company;
@Column(name="certificate_link",length=500,nullable = false)
private String link;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getCompany() {
	return company;
}
public void setCompany(String company) {
	this.company = company;
}
public String getLink() {
	return link;
}
public void setLink(String link) {
	this.link = link;
}

}
