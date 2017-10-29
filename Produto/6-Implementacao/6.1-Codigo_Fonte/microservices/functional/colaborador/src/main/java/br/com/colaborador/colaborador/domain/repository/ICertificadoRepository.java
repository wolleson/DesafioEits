package br.com.colaborador.colaborador.domain.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.colaborador.colaborador.domain.entity.Certificado;
import br.com.colaborador.colaborador.domain.entity.Colaborador;



public interface ICertificadoRepository extends JpaRepository<Certificado, Long>{

	
	@Query(" from Certificado certificado where certificado.colaboradorId.id = :pFilter ")
	public Page<Certificado> listCertificadoByColaboradores( @Param("pFilter") Long filter, Pageable pageable);
}
