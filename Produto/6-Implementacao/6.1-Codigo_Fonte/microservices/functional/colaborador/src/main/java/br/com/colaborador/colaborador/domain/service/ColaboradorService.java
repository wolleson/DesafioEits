package br.com.colaborador.colaborador.domain.service;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.agenda.usuario.application.restful.IUsuarioResource;
import br.com.colaborador.colaborador.application.restful.IColaboradorResource;
import br.com.colaborador.colaborador.domain.entity.Cargo;
import br.com.colaborador.colaborador.domain.entity.Certificado;
import br.com.colaborador.colaborador.domain.entity.Colaborador;
import br.com.colaborador.colaborador.domain.entity.RegimeDoContrato;
import br.com.colaborador.colaborador.domain.repository.IColaboradorRepository;

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

 
	
	
	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/
	
	
	
	
	@Override
	public Colaborador findColaboradorById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Certificado findCertificadoById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Colaborador insertColaborador(Colaborador colaborador) {
		return this.colaboradorRepository.save(colaborador);
	}

	@Override
	public Certificado insertCertificado(Certificado certifcado) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Colaborador updateColaborador(Colaborador colaborador) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Certificado updateCertificado(Certificado certificado) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteColaborador(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteCertificado(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Page<Colaborador> listCertificadosByFilters(String filter, String titulo, String descricao, LocalDate data,
			PageRequest pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<Colaborador> listColaboradoresByFilters(String filter, String nome, String nomesobre, Cargo cargo,
			RegimeDoContrato regimeContrato, Boolean ativo, LocalDate dataAdmissao, LocalDate dataDemissao,
			PageRequest pageable) {
		// TODO Auto-generated method stub
		return null;
	}

}
