package com.example.vhm_amorce_backend.service;

import java.util.List;

public interface IEntityService <T, ID> {
	

    T save(T entity);

    T findById(ID id);

    List<T> findAll();

    void deleteById(ID id);

}
