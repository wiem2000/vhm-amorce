package com.example.vhm_amorce_backend.service;

import org.springframework.stereotype.Service;

import com.example.vhm_amorce_backend.dao.PrmTpRepository;
import com.example.vhm_amorce_backend.entity.PrmTp;



@Service
public class PrmTpService extends BaseEntityService<PrmTp, Long>  {
	
	private final PrmTpRepository prmTpRepository;

    public PrmTpService(PrmTpRepository prmTpRepository) {
        super(prmTpRepository);
        this.prmTpRepository = prmTpRepository;
    }

}
