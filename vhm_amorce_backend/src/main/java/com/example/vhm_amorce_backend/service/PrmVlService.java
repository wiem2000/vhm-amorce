package com.example.vhm_amorce_backend.service;

import org.springframework.stereotype.Service;

import com.example.vhm_amorce_backend.dao.PrmVlRepository;
import com.example.vhm_amorce_backend.entity.PrmVl;



@Service
public class PrmVlService extends BaseEntityService<PrmVl, Long>  {
	
	private final PrmVlRepository prmVlRepository;

    public PrmVlService(PrmVlRepository prmVlRepository) {
        super(prmVlRepository);
        this.prmVlRepository = prmVlRepository;
    }

}
