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

import com.example.vhm_amorce_backend.entity.PrmClss;
import com.example.vhm_amorce_backend.service.PrmClssService;





@RestController
@RequestMapping("/prmClss")
@CrossOrigin("http://localhost:4200")//*

public class PrmClssRestController {

	
	@Autowired
	private PrmClssService prmClssService;
	

	
	
	@GetMapping("/all")
	 public ResponseEntity <List<PrmClss>> getAllPrmClss(){
		List<PrmClss> prmClss=prmClssService.findAll();
		return new ResponseEntity<>(prmClss,HttpStatus.OK);
		 
	 }


	@GetMapping("/find/{id}")
	public  ResponseEntity<PrmClss> getPrmClssById(@PathVariable("id")Long id){
		PrmClss prmClss=prmClssService.findById(id);
			
		return new ResponseEntity<>(prmClss,HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/add")
	public ResponseEntity<PrmClss> addPrmClss(@RequestBody PrmClss c){
		PrmClss newPrmClss=prmClssService.save(c);
		return new ResponseEntity<>(newPrmClss,HttpStatus.CREATED);
	
	}
	
	@PutMapping("/update")
	public ResponseEntity<PrmClss> updatePrmClss(@RequestBody PrmClss c){
		PrmClss updatePrmClss=prmClssService.save(c);
		return new ResponseEntity<>(updatePrmClss,HttpStatus.OK);
	
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePrmClss(@PathVariable("id") Long id){
		prmClssService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	
	}
	

	

	
	

}

