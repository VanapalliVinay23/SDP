package com.klef.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="project_table")
public class Project 
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="project_id")
private int id;
@Column(name = "project_topic",length = 50,nullable = false)
private String topic;
@Column(name="project_description",length = 250,nullable = false)
private String description;
@Column(name="project_gitlink",length = 500,nullable = false)
private String gitlink;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getTopic() {
	return topic;
}
public void setTopic(String topic) {
	this.topic = topic;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getGitlink() {
	return gitlink;
}
public void setGitlink(String gitlink) {
	this.gitlink = gitlink;
}
}
