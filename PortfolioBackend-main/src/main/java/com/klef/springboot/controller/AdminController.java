package com.klef.springboot.controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.klef.springboot.model.Admin;
import com.klef.springboot.model.Certification;
import com.klef.springboot.model.Education;
import com.klef.springboot.model.Project;
import com.klef.springboot.model.Skill;
import com.klef.springboot.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {
	@Autowired
	  private AdminService adminService;
	
	
	  
	  @PostMapping("/checkadminlogin")
	  public ResponseEntity<?> checkadminlogin(@RequestBody Admin admin)
	  {
		  try 
	      {
	          Admin a = adminService.checkadminlogin(admin.getUsername(), admin.getPassword());

	          if (a!=null) 
	          {
	              return ResponseEntity.ok(a); // if login is successful
	          } 
	          else 
	          {
	              return ResponseEntity.status(401).body("Invalid Username or Password"); // if login is fail
	          }
	      } 
	      catch (Exception e) 
	      {
	    	  System.out.println(e.getMessage()); // check the error in the console using this for debugging purpose
	    	  
	          return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
	      }
	  }
	  @PostMapping("/addskill")
	  public ResponseEntity<String> addskills (@RequestBody Skill skill)
	  {
		  try
		  {
			  String output=adminService.addskills(skill);
			   return ResponseEntity.ok(output);
		  }
		  catch(Exception e)
		  {
			  return ResponseEntity.status(500).body("Failed to Add Skill ");
		  }
	  }
	  @DeleteMapping("/deleteskill/{sid}")
	 public ResponseEntity<String> deleteskill (@PathVariable int sid)
	 {
		 try
		 {
			 String output=adminService.deleteskill(sid);
			 return ResponseEntity.ok(output);
		 }
		 catch (Exception e) 
		 {
			return ResponseEntity.status(500).body("Failed to delete Skill");
		}
	 }
	 
	 @GetMapping("/viewallskills")
	  public ResponseEntity<List<Skill>> viewallskills()
	  {
		 List<Skill> output =  adminService.displayskills();
		 
		 return ResponseEntity.ok(output); // 200 - success
	  }
	 @PostMapping("/addcertificate")
	  public ResponseEntity<String> addcertificate (@RequestBody Certification certificate)
	  {
		  try
		  {
			  String output=adminService.addcertificate(certificate);
			   return ResponseEntity.ok(output);
		  }
		  catch(Exception e)
		  {
			  return ResponseEntity.status(500).body("Failed to Add certificate ");
		  }
	  }
	 @DeleteMapping("/deletecertificate/{cid}")
	 public ResponseEntity<String> deletecertificate (@PathVariable int cid)
	 {
		 try
		 {
			 String output=adminService.deletecertificate(cid);
			 return ResponseEntity.ok(output);
		 }
		 catch (Exception e) 
		 {
			return ResponseEntity.status(500).body("Failed to delete certificate");
		}
	 }
	 @GetMapping("/viewallcertificates")
	 public ResponseEntity<List<Certification>> viewallcertificates()
	 {
		 List<Certification> output=adminService.displaycertificate();
		 return ResponseEntity.ok(output);
	 }
	 @PostMapping("/addeducation")
	 public ResponseEntity<String> addeducation(@RequestBody Education education) {
	     try {
	         String result = adminService.addeducation(education);
	         return ResponseEntity.ok(result);
	     } catch (Exception e) {
	         return ResponseEntity.status(500).body("Failed to Add Education");
	     }
	 }

	 @DeleteMapping("/deleteeducation/{eid}")
	 public ResponseEntity<String> deleteeducation(@PathVariable int eid) {
	     try {
	         String result = adminService.deleteeducation(eid);
	         return ResponseEntity.ok(result);
	     } catch (Exception e) {
	         return ResponseEntity.status(500).body("Failed to delete Education");
	     }
	 }

	 @GetMapping("/viewalleducation")
	 public ResponseEntity<List<Education>> viewalleducation() {
	     List<Education> list = adminService.displayeducation();
	     return ResponseEntity.ok(list);
	 }
	 
	 @PostMapping("/addproject")
	 public ResponseEntity<String> addproject(@RequestBody Project project)
	 {
		 try {
	         String result = adminService.addproject(project);
	         return ResponseEntity.ok(result);
	     } catch (Exception e) {
	         return ResponseEntity.status(500).body("Failed to Add Project");
	     }
		 
	 }
	 
	 @DeleteMapping("/deleteproject/{pid}")
	 public ResponseEntity<String> deleteproject(@PathVariable int pid) {
	     try {
	         String result = adminService.deleteproject(pid);
	         return ResponseEntity.ok(result);
	     } catch (Exception e) {
	         return ResponseEntity.status(500).body("Failed to delete Project");
	     }
	 }
	 
	 @GetMapping("/viewallproject")
	 public ResponseEntity<List<Project>> viewallproject() {
	     List<Project> list = adminService.displayproject();
	     return ResponseEntity.ok(list);
	 }
	 @GetMapping("/countcertificate")
	 public ResponseEntity<Long> getCountCertificates()
	 {
		 long count=adminService.countcertificates();
		 return ResponseEntity.ok(count);
	 }
	 @GetMapping("/countskills")
	 public ResponseEntity<Long> getCountSkills()
	 {
		 long count=adminService.countskills();
		 return ResponseEntity.ok(count);
		 
	 }
	 @GetMapping("/countprojects")
	 public ResponseEntity<Long> getCountProjects()
	 {
		 long count=adminService.countprojects();
		 return ResponseEntity.ok(count);
	 }
	 

}
