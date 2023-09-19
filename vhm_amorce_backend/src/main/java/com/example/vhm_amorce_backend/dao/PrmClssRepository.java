package com.example.vhm_amorce_backend.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.vhm_amorce_backend.entity.PrmClss;




@RepositoryRestResource
@CrossOrigin("*")
public interface PrmClssRepository extends JpaRepository<PrmClss,Long> {


}
