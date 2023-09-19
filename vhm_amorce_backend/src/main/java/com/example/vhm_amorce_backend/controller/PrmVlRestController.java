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

import com.example.vhm_amorce_backend.entity.PrmVl;
import com.example.vhm_amorce_backend.service.PrmVlService;





@RestController
@RequestMapping("/prmVl")
@CrossOrigin("http://localhost:4200")//*

public class PrmVlRestController {

	
	@Autowired
	private PrmVlService prmVlService;
	

	
	
	@GetMapping("/all")
	 public ResponseEntity <List<PrmVl>> getAllPrmVl(){
		List<PrmVl> prmVl=prmVlService.findAll();
		return new ResponseEntity<>(prmVl,HttpStatus.OK);
		 
	 }


	@GetMapping("/find/{id}")
	public  ResponseEntity<PrmVl> getPrmVlById(@PathVariable("id")Long id){
		PrmVl prmVl=prmVlService.findById(id);
			
		return new ResponseEntity<>(prmVl,HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/add")
	public ResponseEntity<PrmVl> addPrmVl(@RequestBody PrmVl c){
		PrmVl newPrmVl=prmVlService.save(c);
		return new ResponseEntity<>(newPrmVl,HttpStatus.CREATED);
	
	}
	
	@PutMapping("/update")
	public ResponseEntity<PrmVl> updatePrmVl(@RequestBody PrmVl c){
		PrmVl updatePrmVl=prmVlService.save(c);
		return new ResponseEntity<>(updatePrmVl,HttpStatus.OK);
	
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePrmVl(@PathVariable("id") Long id){
		prmVlService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	
	}
	

	

	
	

}

