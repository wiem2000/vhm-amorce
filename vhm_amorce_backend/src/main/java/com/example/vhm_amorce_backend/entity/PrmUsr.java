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
public class PrmUsr implements Serializable { 
	

@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String prmUsr_Vl;
	private String prmUsr_SrvcAr;
	
	@ManyToOne
	private PrmSrvc prmSrvc;
	
	
	@JsonBackReference
	 @ManyToMany(mappedBy = "lstPrmUsr")
	    private List<PrmVl> lstPrmVl ;

	

}
