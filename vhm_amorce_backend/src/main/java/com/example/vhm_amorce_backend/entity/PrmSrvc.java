package com.example.vhm_amorce_backend.entity;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class PrmSrvc  implements Serializable {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String prmSrvc_Nm;
	private Long refSrvc;

	
	@JsonBackReference
	@OneToMany(mappedBy="prmSrvc", fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private Collection<PrmUsr> lstPrmUsr;

}
