package com.example.vhm_amorce_backend.entity;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class PrmVl implements Serializable{
	
@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String prmVl_Dta;
	
	
	@ManyToOne
	private PrmTg prmTg;
	
    @ManyToMany
	  @JoinTable(name = "PrmVlPrmUsr",
	   joinColumns = @JoinColumn(name = "prmVl_id"),
	   inverseJoinColumns = @JoinColumn(name = "prmUsr_id"))
	  private List<PrmUsr> lstPrmUsr ;


	

	
	


}
