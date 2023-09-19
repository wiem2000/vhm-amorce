package com.example.vhm_amorce_backend.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;



public abstract class BaseEntityService<T, ID> implements IEntityService<T, ID> {
	
	   private final JpaRepository<T, ID> repository;

	    public BaseEntityService(JpaRepository<T, ID> repository) {
	        this.repository = repository;
	    }

	    @Override
	    public T save(T entity) {
	        return repository.save(entity);
	    }

	    @Override
	    public T findById(ID id) {
	        return repository.findById(id).orElseThrow(()->new com.example.vhm_amorce_backend.exception.ClassNotFoundException("element by id "+ id + " NOT FOUND"));
	    }

	    @Override
	    public List<T> findAll() {
	        return repository.findAll();
	    }

	    @Override
	    public void deleteById(ID id) {
	        repository.deleteById(id);
	    }
	


	
	

}
