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

import com.example.vhm_amorce_backend.entity.PrmTp;
import com.example.vhm_amorce_backend.service.PrmTpService;





@RestController
@RequestMapping("/prmTp")
@CrossOrigin("http://localhost:4200")//*

public class PrmTpRestController {

	
	@Autowired
	private PrmTpService prmTpService;
	

	
	
	@GetMapping("/all")
	 public ResponseEntity <List<PrmTp>> getAllPrmTp(){
		List<PrmTp> prmTp=prmTpService.findAll();
		return new ResponseEntity<>(prmTp,HttpStatus.OK);
		 
	 }


	@GetMapping("/find/{id}")
	public  ResponseEntity<PrmTp> getPrmTpById(@PathVariable("id")Long id){
		PrmTp prmTp=prmTpService.findById(id);
			
		return new ResponseEntity<>(prmTp,HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/add")
	public ResponseEntity<PrmTp> addPrmTp(@RequestBody PrmTp c){
		PrmTp newPrmTp=prmTpService.save(c);
		return new ResponseEntity<>(newPrmTp,HttpStatus.CREATED);
	
	}
	
	@PutMapping("/update")
	public ResponseEntity<PrmTp> updatePrmTp(@RequestBody PrmTp c){
		PrmTp updatePrmTp=prmTpService.save(c);
		return new ResponseEntity<>(updatePrmTp,HttpStatus.OK);
	
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePrmTp(@PathVariable("id") Long id){
		prmTpService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	
	}
	

	

	
	

}

