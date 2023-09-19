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

import com.example.vhm_amorce_backend.entity.PrmSbClss;
import com.example.vhm_amorce_backend.service.PrmSbClssService;





@RestController
@RequestMapping("/prmSbClss")
@CrossOrigin("http://localhost:4200")//*

public class PrmSbClssRestController {

	
	@Autowired
	private PrmSbClssService prmSbClssService;
	

	
	
	@GetMapping("/all")
	 public ResponseEntity <List<PrmSbClss>> getAllPrmSbClss(){
		List<PrmSbClss> prmSbClss=prmSbClssService.findAll();
		return new ResponseEntity<>(prmSbClss,HttpStatus.OK);
		 
	 }


	@GetMapping("/find/{id}")
	public  ResponseEntity<PrmSbClss> getPrmSbClssById(@PathVariable("id")Long id){
		PrmSbClss prmSbClss=prmSbClssService.findById(id);
			
		return new ResponseEntity<>(prmSbClss,HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/add")
	public ResponseEntity<PrmSbClss> addPrmSbClss(@RequestBody PrmSbClss c){
		PrmSbClss newPrmSbClss=prmSbClssService.save(c);
		return new ResponseEntity<>(newPrmSbClss,HttpStatus.CREATED);
	
	}
	
	@PutMapping("/update")
	public ResponseEntity<PrmSbClss> updatePrmSbClss(@RequestBody PrmSbClss c){
		PrmSbClss updatePrmSbClss=prmSbClssService.save(c);
		return new ResponseEntity<>(updatePrmSbClss,HttpStatus.OK);
	
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePrmSbClss(@PathVariable("id") Long id){
		prmSbClssService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	
	}
	

	

	
	

}

