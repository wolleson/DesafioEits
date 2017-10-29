package br.com.colaborador.colaborador.domain.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDate;

import javax.transaction.Transactional;

import org.apache.commons.io.IOUtils;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import br.com.colaborador.colaborador.application.restful.IColaboradorResource;
import br.com.colaborador.colaborador.domain.entity.Cargo;
import br.com.colaborador.colaborador.domain.entity.Certificado;
import br.com.colaborador.colaborador.domain.entity.Colaborador;
import br.com.colaborador.colaborador.domain.entity.RegimeDoContrato;
import br.com.colaborador.colaborador.domain.repository.ICertificadoRepository;
import br.com.colaborador.colaborador.domain.repository.IColaboradorRepository;
import br.com.colaborador.common.application.i18n.MessageSourceHolder;

@Service
@RemoteProxy
@Transactional
public class ColaboradorService implements  IColaboradorResource
{

	
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 * Serviço de mensagem
	 */
	@Autowired
	private MessageSource messageSource;
	
	@Autowired
	private IColaboradorRepository colaboradorRepository; 

	@Autowired
	private ICertificadoRepository certificadoRepository; 
	
	
	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/
	
	
	
	/**
	 * @param id
	 * @return Colaborador
	 */
	
	public Colaborador findColaboradorById(long id) {
		Assert.notNull( id, this.messageSource.getMessage( "id.null", null, LocaleContextHolder.getLocale() ) );
		Colaborador colaborador = this.colaboradorRepository.findOne( id );
		return 	colaborador;
	}
	
	
	public String teste()
	{
		return "Hello World";
	}

	
	/**
	 * @param id
	 * @return Certificado
	 */

	public Certificado findCertificadoById(long id) {
		Assert.notNull( id, this.messageSource.getMessage( "id.null", null, LocaleContextHolder.getLocale() ) );
		return  this.certificadoRepository.findOne(id);	
	}
	
	/**
	 * @param Colaborador
	 * @return Colaborador
	  */

	public Colaborador insertColaborador(Colaborador colaborador) {
		Assert.notNull( colaborador, this.messageSource.getMessage( "colaborador.null", null, LocaleContextHolder.getLocale() ) );	  
		colaborador.setAtivo(true);
		Colaborador save = this.colaboradorRepository.save(colaborador);
		return save;	
	}

	/**
	 * @param Certificado
	 * @return Certificado
	  */
	
	public Certificado insertCertificado(Certificado certificado){
		Assert.notNull( certificado, this.messageSource.getMessage( "certificado.null", null, LocaleContextHolder.getLocale() ) );
		return this.certificadoRepository.save(certificado);
	}

	
	/**
	 * @param Colaborador
	 * @return Colaborador
	  */

	public Colaborador updateColaborador(Colaborador colaborador) {
		Assert.notNull( colaborador, this.messageSource.getMessage( "colaborador.null", null, LocaleContextHolder.getLocale() ) );
		return this.colaboradorRepository.save(colaborador);
	};

	
	/**
	 * @param Certificado
	 * @return Certificado
	  */
	
	public Certificado updateCertificado(Certificado certificado) {
		Assert.notNull( certificado, this.messageSource.getMessage( "certificado.null", null, LocaleContextHolder.getLocale() ) );
		return this.certificadoRepository.save(certificado);
	}

	
	
	/**
	 * @param id
	 */

	public void deleteColaborador(Long id) {
		Assert.notNull( id, this.messageSource.getMessage( "id.null", null, LocaleContextHolder.getLocale() ) );
		this.colaboradorRepository.delete(id);	
	}

	
	/**
	 * @param id
	 */

	public void deleteCertificado(Long id) {
		Assert.notNull( id, this.messageSource.getMessage( "id.null", null, LocaleContextHolder.getLocale() ) );
		this.certificadoRepository.delete(id);
		
	}

	
	
	/**
	 * @param Certificado, File
	 * 
	 */
	public void uploadArquivoCertificado(Certificado certificado, File file) throws IOException 
	 {
	 Assert.notNull( file, MessageSourceHolder.getMessage("Favor anexar um arquivo para registrar") );
	 FileInputStream fis = new FileInputStream(file);
	 certificado.setCertificado(IOUtils.toByteArray( fis)) ;
	 this.insertCertificado(certificado); 
	 }
	
	
	/**
	 * @param Colaborador, File
	 * 
	 */
	public void uploadArquivoColaborador(Colaborador colaborador, File file) throws IOException 
	 {
	 Assert.notNull( file, MessageSourceHolder.getMessage("Favor anexar um arquivo para registrar") );
	 FileInputStream fis = new FileInputStream(file);
	 colaborador.setContrato(IOUtils.toByteArray( fis)) ;
	 this.insertColaborador(colaborador); 
	 }
	
	
	/**
	 * 
	 */
	
	public Page<Colaborador> listCertificadosByFilters(String filter, String titulo, String descricao, LocalDate data,
			PageRequest pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	
	/**
	 * 
	 */

	public Page<Colaborador> listColaboradoresByFilters(String filter, String nome, String sobrenome, Cargo cargo,
			RegimeDoContrato regimeContrato, Boolean ativo, LocalDate dataAdmissao, LocalDate dataDemissao,
			PageRequest pageable) {
		Page<Colaborador> colaboradores = this.colaboradorRepository.listByFilters(filter, nome, sobrenome, cargo, regimeContrato, ativo, dataAdmissao, dataDemissao, pageable);
		return colaboradores;
	}
	
	public Page<Colaborador> listColaboradorByNome()
	{
		Direction asc;
		asc = Direction.ASC;
		PageRequest pageable = new PageRequest(0, 5, asc, "nome");
		return this.colaboradorRepository.listColaboradorByFilters("joam", pageable);
	}
	
	public Page<Certificado> listCertificadosByColaboradores(Long id)
	{
		Direction asc;
		asc = Direction.ASC;
		PageRequest pageable = new PageRequest(0, 5, asc, "titulo");
		return this.certificadoRepository.listCertificadoByColaboradores(id , pageable);
	}
}
