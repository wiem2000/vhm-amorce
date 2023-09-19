package com.example.vhm_amorce_backend.service;

import org.springframework.stereotype.Service;

import com.example.vhm_amorce_backend.dao.PrmClssRepository;

import com.example.vhm_amorce_backend.entity.PrmClss;



@Service
public class PrmClssService extends BaseEntityService<PrmClss, Long>  {
	
	private final PrmClssRepository prmClssRepository;

    public PrmClssService(PrmClssRepository prmClssRepository) {
        super(prmClssRepository);
        this.prmClssRepository = prmClssRepository;
    }

}
