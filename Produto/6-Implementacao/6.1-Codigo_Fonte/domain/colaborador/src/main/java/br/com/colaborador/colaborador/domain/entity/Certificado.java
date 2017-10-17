package br.com.colaborador.colaborador.domain.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotNull;

import org.hibernate.envers.Audited;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;

import br.com.colaborador.common.domain.entity.AbstractEntity;
import lombok.Data;

@Data
@Entity
@Audited
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
	@Column(nullable = false, length = 144, unique=true)
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
	private LocalDate data;
	
	/**
	 * Byte certificado
	 */
	@Column(nullable = false)
	private Byte certificado;
	
	
	/**
	 * Colaborador colaborador
	 */
	@Column(nullable = false)
	private Colaborador colaborador;
	
	public Certificado() {
		super();
	}
	
	public Certificado(long id) {
		super(id);
	}
	
	
}
