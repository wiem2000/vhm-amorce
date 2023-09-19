package com.example.vhm_amorce_backend.service;

import org.springframework.stereotype.Service;

import com.example.vhm_amorce_backend.dao.PrmTgRepository;
import com.example.vhm_amorce_backend.entity.PrmTg;



@Service
public class PrmTgService extends BaseEntityService<PrmTg, Long>  {
	
	private final PrmTgRepository prmTgRepository;

    public PrmTgService(PrmTgRepository prmTgRepository) {
        super(prmTgRepository);
        this.prmTgRepository = prmTgRepository;
    }

}
