package br.com.colaborador.colaborador.domain.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

import org.directwebremoting.annotations.DataTransferObject;
import org.hibernate.envers.Audited;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.util.Assert;

import br.com.colaborador.common.domain.entity.AbstractEntity;
import lombok.Data;

@Data
@Entity
@Audited
@DataTransferObject(javascript = "Colaborador")
public class Colaborador extends AbstractEntity implements Serializable 
{
	
	/**
	 * serialVersion
	 */
	private static final long serialVersionUID = -8846255333345283218L;

	
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
	private LocalDateTime dataDeNascimento;

	/**
	 * LocalDateTime dataInicial
	 */
	@NotNull(message = "Informe a data inicial.")
	@Column(nullable = false)
	private LocalDateTime dataDeAdmissao;

	/**
	 * LocalDateTime dataInicial
	 */
	@Column(nullable = true)
	private LocalDateTime dataDeDemissao;

	/**
	 * String numeroCarteiraTrabalho
	 */
	@Length(max = 14)
	@Column(nullable = true, length = 14, unique = true)
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
	@Column
	private byte[] contrato;
	
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
	
	
	/*-------------------------------------------------------------------
	 *				 Métodos de validação 
	 *-------------------------------------------------------------------*/
	
	
	
	/**
	 * Verefica se a letras na vareavel 'numeroCarteiraTrabalho'
	 */
	public void validaNumeroCarteiraTrabalho() 
	{
       Pattern p = Pattern.compile("[0-9]+");
       Matcher m = p.matcher(this.numeroCarteiraTrabalho);
              
       Assert.isTrue( 
				(
						m.find()
				), 
				"Numero da cateira de trabalho invalido "
			);
	}
	
	
	/**
	 * Verefica se a dataDeNascimento é maior que data atual.
	 */
	public void validaDataNascimento() 
	{
		Assert.isTrue( 
				(
					this.dataDeNascimento.isBefore(LocalDateTime.now())  
				), 
				"Data invalida "
			); 
	}

	
	/**
	 * Verefica se a dataDeDemissao é maior que dataDeAdmissao.
	 */
	public void validaDataDemissao() 
	{
		Assert.isTrue( 
				(
					this.dataDeDemissao.isAfter(this.dataDeAdmissao)  
				), 
				"Data invalida "
			); 
	}
	

	
}