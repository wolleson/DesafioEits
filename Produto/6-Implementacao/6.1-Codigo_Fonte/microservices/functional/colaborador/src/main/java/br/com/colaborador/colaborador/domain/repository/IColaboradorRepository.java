package br.com.colaborador.colaborador.domain.repository;

import java.time.LocalDate;
import java.util.List;

import javax.ws.rs.QueryParam;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.colaborador.colaborador.domain.entity.Cargo;
import br.com.colaborador.colaborador.domain.entity.Colaborador;
import br.com.colaborador.colaborador.domain.entity.RegimeDoContrato;

@Repository
public interface IColaboradorRepository extends JpaRepository<Colaborador, Long> {

	
	@Query(value="FROM Colaborador colaborador " +
	  "WHERE ("
	  		+ "(FILTER (colaborador.id, :filter) = TRUE "
	  		+ "OR FILTER  (colaborador.nome, :filter) = TRUE)) "
	  		
	  		    + "AND ((:data_de_demissao < NOW()) OR (:data_de_demissao = colaborador.dataDeDemissao) OR (:data_de_demissao IS NULL)) "
	  		    + "AND ((:data_de_admissao < NOW()) OR (:data_de_admissao = colaborador.dataDeAdmissao) OR (:data_de_admissao IS NULL)) "
	  				
	  			
	  		+ "AND ((:cargo IS NULL) OR (cargo = colaborador.cargo)) "
	  		+ "AND ((:regimeContrato  IS NULL) OR (:regimeContrato = colaborador.regimeDoContrato)) "
	  		+ "AND ((:ativo IS NULL) OR (:ativo = colaborador.ativo) "
	  		+ "AND ((:sobrenome IS NULL) OR (:sobrenome = colaborador.sobrenome)) "
	  + ")"
)
	public Page<Colaborador> listByFilters( @QueryParam( "filter" ) String filter, 
			  @QueryParam( "nome" ) String nome,  
			  @QueryParam( "sobrenome" ) String nomesobre, 
			  @QueryParam( "cargo" ) Cargo cargo, 
			  @QueryParam( "regimeContrato" ) RegimeDoContrato regimeContrato,
			  @QueryParam( "ativo" ) Boolean ativo,
			  @QueryParam( "dataAdmissao" ) LocalDate dataAdmissao, 
			  @QueryParam( "dataDemissao" ) LocalDate  dataDemissao, 
			  Pageable pageable );
	

	
	
	@Query(" from Colaborador colaborador where colaborador.nome like :pFilter ")
	public Page<Colaborador> listColaboradorByFilters( @Param("pFilter") String filter, Pageable pageable);
	
	
}
