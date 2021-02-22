package br.com.prime.credencial.credencial.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.prime.credencial.credencial.dto.CredencialDTO;
import br.com.prime.credencial.credencial.entities.Credencial;
import br.com.prime.credencial.credencial.repository.CredencialDAO;

@Service
public class CredencialService {
	
	@Autowired
	private CredencialDAO repository;
	
	
	
	
	

	@Transactional(readOnly = true)
	public List<CredencialDTO> findAll(){
		List<Credencial> list = repository.findAll();
		
		return list.stream().map(x -> new CredencialDTO(x)).collect(Collectors.toList());
		
	}
	
	
	@Transactional(readOnly = true)
	public CredencialDTO findById(int id){
		Credencial c = repository.findById(id);
		
		
		if(c!=null) {
			
			return new CredencialDTO(c);
		}
		
		
		return null;
		
	}
	

	

	@Transactional(readOnly = true)
	public CredencialDTO findByMatricula(Long matricula){
		Credencial c = repository.findByMatriula(matricula);
		
		
		if(c!=null) {
			
			return new CredencialDTO(c);
		}
		
		
		return null;
		
	}
	

	
	
	

	
	
	@Transactional
	public CredencialDTO insert(CredencialDTO dto) {
		Credencial c = new Credencial(0, dto.getNome(), dto.getCargo(), dto.getEstado(), dto.getCampo(), dto.getMatriula(),dto.getOrdenado(), dto.getFiliacao(), dto.getEmissao(), dto.getValidade(), dto.getLocal(), dto.getEstadoCivil(), dto.getRg(), dto.getOrg_rg());
			c = repository.save(c);
		
		return new CredencialDTO(c);
		
	}
	
	
	
	

	@Transactional
	public CredencialDTO update(CredencialDTO dto) {
		
		//----escrever lógica para update 
		
		Credencial c = repository.findById(dto.getId());
		
		 c = new Credencial(c.getId(), dto.getNome(), dto.getCargo(), dto.getEstado(), dto.getCampo(), dto.getMatriula(),dto.getOrdenado(), dto.getFiliacao(), dto.getEmissao(), dto.getValidade(), dto.getLocal(), dto.getEstadoCivil(), dto.getRg(), dto.getOrg_rg());
			c = repository.save(c);
		
		return new CredencialDTO(c);
		
	}
	
	

}
