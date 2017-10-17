package br.com.colaborador.colaborador.application.restful;

import java.time.LocalDate;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import br.com.colaborador.colaborador.domain.entity.Cargo;
import br.com.colaborador.colaborador.domain.entity.Certificado;
import br.com.colaborador.colaborador.domain.entity.Colaborador;
import br.com.colaborador.colaborador.domain.entity.RegimeDoContrato;

@Component
@Path("/tarefa")
@FeignClient("tarefa")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public interface IColaboradorResource {
	
	
	/**
	 * 
	 * @param id
	 * @return
	 */
	@GET
	@Path("/{id}")
	public Colaborador findColaboradorById( @PathParam("id") long id );
	
	
	
	/**
	 * 
	 * @param id
	 * @return
	 */
	@GET
	@Path("/{id}")
	public Certificado findCertificadoById( @PathParam("id") long id );

	
	/**
	 * 
	 * @param colaborador
	 * @return
	 */
	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public Colaborador insertColaborador( Colaborador colaborador );
	
	
	/**
	 * 
	 * @param certifcado
	 * @return
	 */
	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public Certificado insertCertificado( Certificado certifcado);

	
	
	/**
	 * 
	 * @param colaborador
	 * @return
	 */
	@POST
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public Colaborador updateColaborador( Colaborador colaborador );
	
	/**
	 * 
	 * @param colaborador
	 * @return
	 */
	@POST
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public Certificado updateCertificado( Certificado certificado );
	
	
	/**
	 * 
	 * @param id
	 */
	@DELETE
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void deleteColaborador( Long id );
	
	/**
	 * 
	 * @param id
	 */
	@DELETE
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void deleteCertificado( Long id );
	
	
	/**
	 * 
	 * @param filter
	 * @return
	 */
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	public Page<Colaborador> listCertificadosByFilters( @QueryParam( "filter" ) String filter, 
											  @QueryParam( "titulo" ) String titulo,  
											  @QueryParam( "descricao" ) String descricao, 
											  @QueryParam( "data" ) LocalDate data, 
											  PageRequest pageable );	
	
	/**
	 * 
	 * @param filter
	 * @return
	 */
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	public Page<Colaborador> listColaboradoresByFilters( @QueryParam( "filter" ) String filter, 
											  @QueryParam( "nome" ) String nome,  
											  @QueryParam( "sobrenome" ) String nomesobre, 
											  @QueryParam( "cargo" ) Cargo cargo, 
											  @QueryParam( "regimeContrato" ) RegimeDoContrato regimeContrato,
											  @QueryParam( "ativo" ) Boolean ativo,
											  @QueryParam( "dataAdmissao" ) LocalDate dataAdmissao, 
											  @QueryParam( "dataDemissao" ) LocalDate  dataDemissao, 
											  PageRequest pageable );	
}
