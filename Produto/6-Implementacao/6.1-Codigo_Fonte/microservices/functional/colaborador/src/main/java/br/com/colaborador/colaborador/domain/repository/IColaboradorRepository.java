package br.com.colaborador.colaborador.domain.repository;

import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.colaborador.colaborador.domain.entity.Cargo;
import br.com.colaborador.colaborador.domain.entity.Colaborador;
import br.com.colaborador.colaborador.domain.entity.RegimeDoContrato;


/*
 * Classe onde inplementamos as consultas mais complexas
 */

@Repository
public interface IColaboradorRepository extends JpaRepository<Colaborador, Long>
{	
	/*
	 * Filtro de colaboradores
	 */
	@Query(value="FROM Colaborador colaborador " +
	  "WHERE ((FILTER (colaborador.nome, :nome) = TRUE "
	  + "AND FILTER(colaborador.sobrenome, :sobrenome)= TRUE) "
	  		    + "AND ((:dataDemissao < NOW()) OR (:dataDemissao = colaborador.dataDeDemissao) OR (:dataDemissao IS NULL)) "
	  		    + "AND ((:dataAdmissao < NOW()) OR (:dataAdmissao = colaborador.dataDeAdmissao) OR (:dataAdmissao IS NULL)) "
	  				
	  		+ "AND ((:cargo IS NULL) OR (:cargo = colaborador.cargo)) "
	  		+ "AND ((:regimeContrato  IS NULL) OR (:regimeContrato = colaborador.regimeDoContrato)) "
	  		+ "AND ((:ativo IS NULL) OR (:ativo = colaborador.ativo)) "
	  		
	  + ")"
)
	public Page<Colaborador> listByFilters( 
			  @Param( "nome" ) String nome,  
			  @Param( "sobrenome" ) String sobrenome, 
			  @Param( "cargo" ) Cargo cargo, 
			  @Param( "regimeContrato" ) RegimeDoContrato regimeContrato,
			  @Param( "ativo" ) Boolean ativo,
			  @Param( "dataAdmissao" ) LocalDateTime dataAdmissao, 
			  @Param( "dataDemissao" ) LocalDateTime  dataDemissao, 
			  Pageable pageable );
	
	
	
	@Query(" from Colaborador colaborador where colaborador.nome like :pFilter ")
	public Page<Colaborador> listColaboradorByFilters( @Param("pFilter") String filter, Pageable pageable);
}
