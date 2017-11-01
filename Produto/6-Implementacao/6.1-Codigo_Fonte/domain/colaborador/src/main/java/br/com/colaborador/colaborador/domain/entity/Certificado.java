package br.com.colaborador.colaborador.domain.entity;

import java.io.Serializable;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import org.directwebremoting.annotations.DataTransferObject;
import org.hibernate.annotations.Parameter;
import org.hibernate.annotations.Type;
import org.hibernate.envers.Audited;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;

import br.com.colaborador.common.domain.entity.AbstractEntity;
import lombok.Data;

@Data
@Entity
@Audited
@DataTransferObject(javascript = "Certificado")
public class Certificado extends AbstractEntity implements Serializable 
{

	/**
	 * serialVersion
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * String titulo
	 */
	@NotEmpty(message = "Informe um título para do certificado")
	@NotNull()
	@Length(max=144)
	@Column(nullable = false, length = 144)
	private String titulo;
	
	
	/**
	 * String descricao
	 */
	@Column(nullable = true)
	private String descricao;
	
	/**
	 * LocalDate data
	 */
	@NotNull(message = "Informe a data inicial.")
	@Column(nullable = false)
	private LocalDateTime data;
	
	/**
	 * Byte certificado
	 */
	@Column(nullable = true)
	private byte[] certificado;
	
	
	/**
	 * Colaborador colaborador
	 */
	@Autowired
	@Type(type="transientEntity", 
			parameters=@Parameter(name="entity", value="br.com.colaborador.colaborador.domain.entity.Colaborador")
		)
	@Column(nullable = false, name = "colaborador_id")
	private Colaborador colaboradorId;
	
	public Certificado() 
	{
		super();
	}
	
	public Certificado(long id) 
	{
		super(id);
	}
	
	
	/*-------------------------------------------------------------------
	 *				Métodos de validação
	 *-------------------------------------------------------------------*/
	
	
	/**
	 * Metodo para vereficar se data do certificado é maior que data atual.
	 */
	public void validaData() 
	{
		Assert.isTrue( 
				(
					this.data.isBefore(LocalDateTime.now())  
				), 
				"Data invalida "
			); 
	}
}
