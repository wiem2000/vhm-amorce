package com.example.vhm_amorce_backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.vhm_amorce_backend.entity.PrmUsr;
import com.example.vhm_amorce_backend.service.PrmUsrService;





@RestController
@RequestMapping("/prmUsr")
@CrossOrigin("http://localhost:4200")//*

public class PrmUsrRestController {

	
	@Autowired
	private PrmUsrService prmUsrService;
	

	
	
	@GetMapping("/all")
	 public ResponseEntity <List<PrmUsr>> getAllPrmUsr(){
		List<PrmUsr> prmUsr=prmUsrService.findAll();
		return new ResponseEntity<>(prmUsr,HttpStatus.OK);
		 
	 }


	@GetMapping("/find/{id}")
	public  ResponseEntity<PrmUsr> getPrmUsrById(@PathVariable("id")Long id){
		PrmUsr prmUsr=prmUsrService.findById(id);
			
		return new ResponseEntity<>(prmUsr,HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/add")
	public ResponseEntity<PrmUsr> addPrmUsr(@RequestBody PrmUsr c){
		PrmUsr newPrmUsr=prmUsrService.save(c);
		return new ResponseEntity<>(newPrmUsr,HttpStatus.CREATED);
	
	}
	
	@PutMapping("/update")
	public ResponseEntity<PrmUsr> updatePrmUsr(@RequestBody PrmUsr c){
		PrmUsr updatePrmUsr=prmUsrService.save(c);
		return new ResponseEntity<>(updatePrmUsr,HttpStatus.OK);
	
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePrmUsr(@PathVariable("id") Long id){
		prmUsrService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	
	}
	

	

	
	

}

