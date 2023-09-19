package com.example.vhm_amorce_backend.service;

import org.springframework.stereotype.Service;

import com.example.vhm_amorce_backend.dao.PrmSbClssRepository;
import com.example.vhm_amorce_backend.entity.PrmSbClss;



@Service
public class PrmSbClssService extends BaseEntityService<PrmSbClss, Long>  {
	
	private final PrmSbClssRepository prmSbClssRepository;

    public PrmSbClssService(PrmSbClssRepository prmSbClssRepository) {
        super(prmSbClssRepository);
        this.prmSbClssRepository = prmSbClssRepository;
    }

}
