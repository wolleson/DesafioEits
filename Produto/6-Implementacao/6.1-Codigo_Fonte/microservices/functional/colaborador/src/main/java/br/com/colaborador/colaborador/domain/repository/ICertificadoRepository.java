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

/*
 * Classe onde inplementamos as consultas mais complexas
 */
public interface ICertificadoRepository extends JpaRepository<Certificado, Long>
{

	@Query(value="FROM Certificado certificado " +
			  "WHERE ((FILTER (certificado.titulo, :titulo) = TRUE "
			  + "AND FILTER(certificado.descricao, :descricao)= TRUE) )"
		)
			public Page<Certificado> listByFiltersCertificado( 
					  @Param( "titulo" ) String titulo,  
					  @Param( "descricao" ) String descricao, 
					  Pageable pageable );
			
	
	@Query(" from Certificado certificado where certificado.colaboradorId.id = :pFilter ")
	public Page<Certificado> listCertificadoByColaboradores( @Param("pFilter") Long filter, Pageable pageable);
}
