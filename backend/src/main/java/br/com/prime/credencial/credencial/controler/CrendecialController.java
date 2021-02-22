package br.com.prime.credencial.credencial.controler;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.prime.credencial.credencial.dto.CredencialDTO;
import br.com.prime.credencial.credencial.service.CredencialService;

@RestController
@RequestMapping(value="/credencial")
public class CrendecialController {
	
	
	@Autowired
	private CredencialService service;
	
	@GetMapping
	public ResponseEntity<List<CredencialDTO>> findAll(){
		
	List<CredencialDTO> list = service.findAll();
	
	return ResponseEntity.ok().body(list);
	
	}
	
	

	@PostMapping
	public ResponseEntity<CredencialDTO> insert(@RequestBody CredencialDTO dto){
		
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		
		return ResponseEntity.created(uri).body(dto);
	}
	
	
	
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<CredencialDTO> findAll(@PathVariable int id){
		
	CredencialDTO cred = service.findById(id);
	
	if(cred!=null) {
	return ResponseEntity.ok().body(cred);
	}else {
		return ResponseEntity.ok().body(new CredencialDTO());
	}	
	}
	
	
	
	
	
	

	
	@GetMapping(value = "/matricula/{matricula}")
	public ResponseEntity<CredencialDTO> findAll(@PathVariable Long matricula){
		
	CredencialDTO cred = service.findByMatricula(matricula);
	
	if(cred!=null) {
	return ResponseEntity.ok().body(cred);
	}else {
		return ResponseEntity.ok().body(new CredencialDTO());
	}	
	}
	
	
	
	
	@PutMapping("/update")
	public ResponseEntity<CredencialDTO> update(@RequestBody CredencialDTO dto){
		 service.update(dto);
		return ResponseEntity.ok().body(dto);
	}

	

}
