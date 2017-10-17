package br.com.colaborador.colaborador.domain.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotNull;

import org.hibernate.envers.Audited;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;

import br.com.colaborador.common.domain.entity.AbstractEntity;
import br.com.agenda.usuario.domain.entity.Usuario;
import lombok.Data;

@Data
@Entity
@Audited
public class Colaborador extends AbstractEntity implements Serializable 
{
	
	/**
	 * serialVersion
	 */
	private static final long serialVersionUID = 1L;

	
	/**
	 * String nome
	 */
	@NotEmpty(message = "Informe um nome para o colaborador.")
	@NotNull()
	@Length(max = 144)
	@Column(nullable = false, length = 144, unique = false)
	private String nome;

	/**
	 * String sobrenome
	 */
	@NotEmpty(message = "Informe um sobrenome para o colaborador.")
	@NotNull()
	@Length(max = 144)
	@Column(nullable = false, length = 144, unique = false)
	private String sobrenome;

	/**
	 * LocalDateTime dataInicial
	 */
	@NotNull(message = "Informe a data inicial.")
	@Column(nullable = false)
	private LocalDate dataDeNascimento;

	/**
	 * LocalDateTime dataInicial
	 */
	@NotNull(message = "Informe a data inicial.")
	@Column(nullable = false)
	private LocalDate dataDeAdmissao;

	/**
	 * LocalDateTime dataInicial
	 */
	@Column(nullable = true)
	private LocalDate dataDeDemissao;

	/**
	 * String numeroCarteiraTrabalho
	 */
	@Length(max = 14)
	@Column(nullable = true, length = 14, unique = false)
	private String numeroCarteiraTrabalho;

	/**
	 * String motivoDesligamento
	 */
	@Column(nullable = true)
	private String motivoDesligamento;

	/**
	 * String justificativa
	 */
	@Column(nullable = true)
	private String justificativa;
	
	/**
	 * Boolean ativo
	 */
	@Column(columnDefinition = "boolean default true", nullable = false)
	private Boolean ativo;

	/**
	 * Byte contrato
	 */
	@Column(nullable = false)
	private Byte contrato;
	
	/**
	 * Cargo cargo
	 */
	@NotNull(message = "Informe o cargo.")
	@Enumerated(EnumType.ORDINAL)
	@Column(nullable = false)
	private Cargo cargo;
	
	/**
	 * RegimeDoContrato regimeDoContrato
	 *
	 */
	
	@NotNull(message = "Informe o ragime contratual.")
	@Enumerated(EnumType.ORDINAL)
	@Column(nullable = false)
	private RegimeDoContrato regimeDoContrato;
	
	
	/**
	 * Constructor Colaborador
	 */
	public Colaborador()
	{
		super();
	}
	
	/**
	 * @param id
	 */
	public Colaborador(Long id)
	{
		super(id);
	}

}
