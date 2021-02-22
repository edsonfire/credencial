package br.com.prime.credencial.credencial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.prime.credencial.credencial.entities.Credencial;

public interface CredencialDAO extends JpaRepository <Credencial, Integer> {

	
	
	Credencial findById(int id);
	
	Credencial findByMatriula(Long matricula);
	
	
}
