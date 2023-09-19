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

import com.example.vhm_amorce_backend.entity.PrmTg;
import com.example.vhm_amorce_backend.service.PrmTgService;





@RestController
@RequestMapping("/prmTg")
@CrossOrigin("http://localhost:4200")//*

public class PrmTgRestController {

	
	@Autowired
	private PrmTgService prmTgService;
	

	
	
	@GetMapping("/all")
	 public ResponseEntity <List<PrmTg>> getAllPrmTg(){
		List<PrmTg> prmTg=prmTgService.findAll();
		return new ResponseEntity<>(prmTg,HttpStatus.OK);
		 
	 }


	@GetMapping("/find/{id}")
	public  ResponseEntity<PrmTg> getPrmTgById(@PathVariable("id")Long id){
		PrmTg prmTg=prmTgService.findById(id);
			
		return new ResponseEntity<>(prmTg,HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/add")
	public ResponseEntity<PrmTg> addPrmTg(@RequestBody PrmTg c){
		PrmTg newPrmTg=prmTgService.save(c);
		return new ResponseEntity<>(newPrmTg,HttpStatus.CREATED);
	
	}
	
	@PutMapping("/update")
	public ResponseEntity<PrmTg> updatePrmTg(@RequestBody PrmTg c){
		PrmTg updatePrmTg=prmTgService.save(c);
		return new ResponseEntity<>(updatePrmTg,HttpStatus.OK);
	
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePrmTg(@PathVariable("id") Long id){
		prmTgService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	
	}
	

	

	
	

}

