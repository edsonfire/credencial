package br.com.prime.credencial.credencial.entities;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Credencial implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int 		id;
	private String 		nome;
	private Cargo 		cargo;
	private String 		Estado;
	private String 		campo;
	private Long 		matriula;
	private Instant 	ordenado;
	private Instant 	filiacao;
	private Instant 	emissao;
	private Instant 	validade;
	private String 		local;
	private EstadoCivil estadoCivil;
	private String rg;
	private String org_rg;
	
	
	
	public Credencial() {}
	
	
	
	
	public Credencial(int id, String nome, Cargo cargo, String estado, String campo, Long matriula, Instant ordenado,
			Instant filiacao, Instant emissao, Instant validade, String local, EstadoCivil estadoCivil, String rg,
			String org_rg) {
		super();
		this.id = id;
		this.nome = nome;
		this.cargo = cargo;
		Estado = estado;
		this.campo = campo;
		this.matriula = matriula;
		this.ordenado = ordenado;
		this.filiacao = filiacao;
		this.emissao = emissao;
		this.validade = validade;
		this.local = local;
		this.estadoCivil = estadoCivil;
		this.rg = rg;
		this.org_rg = org_rg;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Cargo getCargo() {
		return cargo;
	}
	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}
	public String getEstado() {
		return Estado;
	}
	public void setEstado(String estado) {
		Estado = estado;
	}
	public String getCampo() {
		return campo;
	}
	public void setCampo(String campo) {
		this.campo = campo;
	}
	public Long getMatriula() {
		return matriula;
	}
	public void setMatriula(Long matriula) {
		this.matriula = matriula;
	}
	public Instant getOrdenado() {
		return ordenado;
	}
	public void setOrdenado(Instant ordenado) {
		this.ordenado = ordenado;
	}
	public Instant getFiliacao() {
		return filiacao;
	}
	public void setFiliacao(Instant filiacao) {
		this.filiacao = filiacao;
	}
	public Instant getEmissao() {
		return emissao;
	}
	public void setEmissao(Instant emissao) {
		this.emissao = emissao;
	}
	public Instant getValidade() {
		return validade;
	}
	public void setValidade(Instant validade) {
		this.validade = validade;
	}
	public String getLocal() {
		return local;
	}
	public void setLocal(String local) {
		this.local = local;
	}
	public EstadoCivil getEstadoCivil() {
		return estadoCivil;
	}
	public void setEstadoCivil(EstadoCivil estadoCivil) {
		this.estadoCivil = estadoCivil;
	}
	public String getRg() {
		return rg;
	}
	public void setRg(String rg) {
		this.rg = rg;
	}
	public String getOrg_rg() {
		return org_rg;
	}
	public void setOrg_rg(String org_rg) {
		this.org_rg = org_rg;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Credencial other = (Credencial) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
	

}
