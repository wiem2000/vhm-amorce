package com.example.vhm_amorce_backend.service;

import org.springframework.stereotype.Service;

import com.example.vhm_amorce_backend.dao.PrmUsrRepository;
import com.example.vhm_amorce_backend.entity.PrmUsr;



@Service
public class PrmUsrService extends BaseEntityService<PrmUsr, Long>  {
	
	private final PrmUsrRepository prmUsrRepository;

    public PrmUsrService(PrmUsrRepository prmUsrRepository) {
        super(prmUsrRepository);
        this.prmUsrRepository = prmUsrRepository;
    }

}