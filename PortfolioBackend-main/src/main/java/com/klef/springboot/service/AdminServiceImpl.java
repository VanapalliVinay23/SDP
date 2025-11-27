package com.klef.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.springboot.model.Admin;
import com.klef.springboot.model.Certification;
import com.klef.springboot.model.Education;
import com.klef.springboot.model.Project;
import com.klef.springboot.model.Skill;
import com.klef.springboot.repository.AdminRepository;
import com.klef.springboot.repository.CertificationRepository;
import com.klef.springboot.repository.EducationRepository;
import com.klef.springboot.repository.ProjectRepository;
import com.klef.springboot.repository.SkillRepository;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private SkillRepository skillRepository;
	@Autowired
	private CertificationRepository certificateRepository;
	@Autowired
	private EducationRepository educationRepository;
	@Autowired
	private ProjectRepository projectRepository;

	@Override
	public Admin checkadminlogin(String username, String password) {
		return adminRepository.findByUsernameAndPassword(username, password);
	}


	@Override
	public String addskills(Skill skill) {
		skillRepository.save(skill);
		return "Skills added successfully";
	}


	@Override
	public String deleteskill(int sid) {
		
       Optional<Skill> skill=skillRepository.findById(sid);
       if(skill.isPresent())
       {
    	   skillRepository.deleteById(sid);
    	   return "Skill Deleted Successfully";
       }
       else {
    	   return "Skill ID Not found";
       }
		
	}


	@Override
	public List<Skill> displayskills() {
		
		return skillRepository.findAll();
	}


	@Override
	public String addcertificate(Certification certificate) {
		certificateRepository.save(certificate);
		return "Certificate Added Successfully";
	}


	@Override
	public String deletecertificate(int cid) {
		Optional<Certification> certificate=certificateRepository.findById(cid);
	       if(certificate.isPresent())
	       {
	    	   certificateRepository.deleteById(cid);
	    	   return "Certificate Deleted Successfully";
	       }
	       else {
	    	   return "Certificate ID Not found";
	       }
		
	}


	@Override
	public List<Certification> displaycertificate() {
		
		return certificateRepository.findAll();
	}


	@Override
	public String addeducation(Education education) {
		educationRepository.save(education);
		return "Added Education successfully";
	}


	@Override
	public String deleteeducation(int eid) {

	       Optional<Education> educate=educationRepository.findById(eid);
	       if(educate.isPresent())
	       {
	    	   educationRepository.deleteById(eid);
	    	   return "Education Deleted Successfully";
	       }
	       else {
	    	   return "Education ID Not found";
	       }
	}


	@Override
	public List<Education> displayeducation() {
		return educationRepository.findAll();
		
	}


	@Override
	public String addproject(Project project) {
		projectRepository.save(project);
		return "Added Project Successfully";
	}


	@Override
	public String deleteproject(int pid) {
		Optional<Project> project=projectRepository.findById(pid);
	       if(project.isPresent())
	       {
	    	   projectRepository.deleteById(pid);
	    	   return "Project Deleted Successfully";
	       }
	       else {
	    	   return "Project ID Not found";
	       }
	}


	@Override
	public List<Project> displayproject() {
		return projectRepository.findAll();
	}


	@Override
	public Long countcertificates() 
	{
		return certificateRepository.count();
	}


	@Override
	public Long countskills() 
	{
		return skillRepository.count();
	}


	@Override
	public Long countprojects() 
	{
		return projectRepository.count();
	}


	

}
