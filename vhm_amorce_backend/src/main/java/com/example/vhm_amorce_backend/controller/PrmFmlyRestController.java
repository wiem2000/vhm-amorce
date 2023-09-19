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

import com.example.vhm_amorce_backend.entity.PrmFmly;
import com.example.vhm_amorce_backend.service.PrmFmlyService;





@RestController
@RequestMapping("/prmFmly")
@CrossOrigin("http://localhost:4200")//*

public class PrmFmlyRestController {

	
	@Autowired
	private PrmFmlyService prmFmlyService;
	

	
	
	@GetMapping("/all")
	 public ResponseEntity <List<PrmFmly>> getAllPrmFmly(){
		List<PrmFmly> prmFmly=prmFmlyService.findAll();
		return new ResponseEntity<>(prmFmly,HttpStatus.OK);
		 
	 }


	@GetMapping("/find/{id}")
	public  ResponseEntity<PrmFmly> getPrmFmlyById(@PathVariable("id")Long id){
		PrmFmly prmFmly=prmFmlyService.findById(id);
			
		return new ResponseEntity<>(prmFmly,HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/add")
	public ResponseEntity<PrmFmly> addPrmFmly(@RequestBody PrmFmly c){
		PrmFmly newPrmFmly=prmFmlyService.save(c);
		return new ResponseEntity<>(newPrmFmly,HttpStatus.CREATED);
	
	}
	
	@PutMapping("/update")
	public ResponseEntity<PrmFmly> updatePrmFmly(@RequestBody PrmFmly c){
		PrmFmly updatePrmFmly=prmFmlyService.save(c);
		return new ResponseEntity<>(updatePrmFmly,HttpStatus.OK);
	
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePrmFmly(@PathVariable("id") Long id){
		prmFmlyService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	
	}
	

	

	
	

}

