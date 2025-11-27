package com.klef.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="skill_table")
public class Skill 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="skill_id")
	private int id;
	@Column(name="skill_name",length=150,nullable = false)
	private String name;
	@Column(name="skill_categoty",length=100,nullable=false)
	private String category;
	@Column(name="skill_link",length=300,nullable=false)
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
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}

}
