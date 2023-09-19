package com.example.vhm_amorce_backend.service;

import org.springframework.stereotype.Service;

import com.example.vhm_amorce_backend.dao.PrmFmlyRepository;
import com.example.vhm_amorce_backend.entity.PrmFmly;



@Service
public class PrmFmlyService extends BaseEntityService<PrmFmly, Long>  {
	
	private final PrmFmlyRepository prmFmlyRepository;

    public PrmFmlyService(PrmFmlyRepository prmFmlyRepository) {
        super(prmFmlyRepository);
        this.prmFmlyRepository = prmFmlyRepository;
    }

}
