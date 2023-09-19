package com.example.vhm_amorce_backend.service;

import org.springframework.stereotype.Service;

import com.example.vhm_amorce_backend.dao.PrmSrvcRepository;
import com.example.vhm_amorce_backend.entity.PrmSrvc;



@Service
public class PrmSrvcService extends BaseEntityService<PrmSrvc, Long>  {
	
	private final PrmSrvcRepository prmSrvcRepository;

    public PrmSrvcService(PrmSrvcRepository prmSrvcRepository) {
        super(prmSrvcRepository);
        this.prmSrvcRepository = prmSrvcRepository;
    }

}
