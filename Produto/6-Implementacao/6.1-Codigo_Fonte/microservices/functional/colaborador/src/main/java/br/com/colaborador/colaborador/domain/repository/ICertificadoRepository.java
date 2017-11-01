package br.com.colaborador.colaborador.domain.repository;


import java.time.LocalDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.colaborador.colaborador.domain.entity.Cargo;
import br.com.colaborador.colaborador.domain.entity.Certificado;
import br.com.colaborador.colaborador.domain.entity.Colaborador;
import br.com.colaborador.colaborador.domain.entity.RegimeDoContrato;



public interface ICertificadoRepository extends JpaRepository<Certificado, Long>{

	
	
	
	@Query(value="FROM Certificado certificado " +
			 "WHERE ( (:titulo IS NULL) OR (:titulo LIKE certificado.titulo)  "
			 +"AND (:descricao IS NULL) OR (:descricao LIKE certificado.descricao)  "
		     + "AND ((:data < NOW()) OR (:data = certificado.data) OR (:data IS NULL)) "
			  + ")"
		)
			public Page<Certificado> listByFiltersCertificado( 
					  @Param( "titulo" ) String titulo,  
					  @Param( "descricao" ) String descricao, 
					  @Param( "data" ) LocalDateTime data, 
					  Pageable pageable );
			
	
	@Query(" from Certificado certificado where certificado.colaboradorId.id = :pFilter ")
	public Page<Certificado> listCertificadoByColaboradores( @Param("pFilter") Long filter, Pageable pageable);
}
