package com.klef.springboot.service;

import java.util.*;

import com.klef.springboot.model.Admin;
import com.klef.springboot.model.Certification;
import com.klef.springboot.model.Education;
import com.klef.springboot.model.Project;
import com.klef.springboot.model.Skill;

public interface AdminService {
	public Admin checkadminlogin(String username,String password);
	public String addskills(Skill skill);
	public String deleteskill(int sid);
	public List<Skill> displayskills();
	public String addcertificate(Certification certificate);
	public String deletecertificate(int cid);
	public List<Certification> displaycertificate();
	public String addeducation(Education education);
	public String deleteeducation(int eid);
	public List<Education> displayeducation();
	public String addproject(Project project);
	public String deleteproject(int pid);
	public List<Project> displayproject();
	public Long countcertificates();
	public Long countskills();
	public Long countprojects();
	
	
	

}
