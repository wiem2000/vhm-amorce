package com.example.vhm_amorce_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import com.example.vhm_amorce_backend.init.IinitService;



@SpringBootApplication
public class VhmAmorceBackendApplication implements CommandLineRunner{
	
	@Autowired
	private IinitService initService;

	public static void main(String[] args) {
		SpringApplication.run(VhmAmorceBackendApplication.class, args);
	
		
	
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		
		initService.initPrmFmly();
		initService.initPrmClss();
		initService.initPrmSbClss();
		initService.initPrmTp();
		initService.initPrmTg();
		
		initService.initPrmSrvc();
		initService.initPrmUsr();
		initService.initPrmVl();
		
	}
}
