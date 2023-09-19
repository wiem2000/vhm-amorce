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

import com.example.vhm_amorce_backend.entity.PrmSrvc;
import com.example.vhm_amorce_backend.service.PrmSrvcService;





@RestController
@RequestMapping("/prmSrvc")
@CrossOrigin("http://localhost:4200")//*

public class PrmSrvcRestController {

	
	@Autowired
	private PrmSrvcService prmSrvcService;
	

	
	
	@GetMapping("/all")
	 public ResponseEntity <List<PrmSrvc>> getAllPrmSrvc(){
		List<PrmSrvc> prmSrvc=prmSrvcService.findAll();
		return new ResponseEntity<>(prmSrvc,HttpStatus.OK);
		 
	 }


	@GetMapping("/find/{id}")
	public  ResponseEntity<PrmSrvc> getPrmSrvcById(@PathVariable("id")Long id){
		PrmSrvc prmSrvc=prmSrvcService.findById(id);
			
		return new ResponseEntity<>(prmSrvc,HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/add")
	public ResponseEntity<PrmSrvc> addPrmSrvc(@RequestBody PrmSrvc c){
		PrmSrvc newPrmSrvc=prmSrvcService.save(c);
		return new ResponseEntity<>(newPrmSrvc,HttpStatus.CREATED);
	
	}
	
	@PutMapping("/update")
	public ResponseEntity<PrmSrvc> updatePrmSrvc(@RequestBody PrmSrvc c){
		PrmSrvc updatePrmSrvc=prmSrvcService.save(c);
		return new ResponseEntity<>(updatePrmSrvc,HttpStatus.OK);
	
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePrmSrvc(@PathVariable("id") Long id){
		prmSrvcService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	
	}
	

	

	
	

}

