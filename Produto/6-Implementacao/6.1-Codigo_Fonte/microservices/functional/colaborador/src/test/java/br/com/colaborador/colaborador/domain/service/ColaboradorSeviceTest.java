package br.com.colaborador.colaborador.domain.service;

import static org.junit.Assert.*;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.directwebremoting.io.FileTransfer;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.util.Assert;

import br.com.colaborador.colaborador.domain.AbstractIntegrationTests;
import br.com.colaborador.colaborador.domain.entity.Cargo;
import br.com.colaborador.colaborador.domain.entity.Certificado;
import br.com.colaborador.colaborador.domain.entity.Colaborador;
import br.com.colaborador.colaborador.domain.entity.RegimeDoContrato;

public class ColaboradorSeviceTest extends AbstractIntegrationTests{
	
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	@Autowired
	private ColaboradorService colaboradorService;

	
	/*-------------------------------------------------------------------
	 *				 		     PassTest para o CRUD de Colaborador
	 *-------------------------------------------------------------------*/
	
	/**
	 * 
	 */
	@Test
	
	public void insertColaboradorPass() 
	{
		Colaborador colaboradorSav = this.colaboradorService.insertColaborador(this.getColaborador());
		Assert.notNull(colaboradorSav);
		this.colaboradorService.deleteColaborador(colaboradorSav.getId());

	}

	/**
	 * 
	 */
	@Test
	
	public void findColaboradorByIdPass() 
	{
		Colaborador colaboradorSav = this.colaboradorService.insertColaborador(this.getColaborador());
		final Colaborador colaborador = this.colaboradorService.findColaboradorById(colaboradorSav.getId());
		System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++++"+ colaborador.getNome());
		Assert.notNull(colaborador);
		this.colaboradorService.deleteColaborador(colaboradorSav.getId());

	}
	
	
	/**
	 * 
	 */
	@Test
	public void updateColaboradorPass() 
	{
		Colaborador colaboradorSav = this.colaboradorService.insertColaborador(this.getColaborador());
		Colaborador colaboradorUpdate = this.colaboradorService.findColaboradorById(colaboradorSav.getId());
		colaboradorUpdate.setNome("Wolleson");
		this.colaboradorService.updateColaborador(colaboradorUpdate);
		assertEquals(colaboradorUpdate.getNome(), "Wolleson");
		this.colaboradorService.deleteColaborador(colaboradorSav.getId());
		
	};
	
	/**
	 * 
	 */
	@Test(expected = IllegalArgumentException.class)
	public void deleteColaboradorPass() 
	{
		Colaborador colaborador = this.getColaborador();
		Colaborador colaboradorSav = this.colaboradorService.insertColaborador(colaborador);
		this.colaboradorService.deleteColaborador(colaboradorSav.getId());	
		this.colaboradorService.findColaboradorById(colaboradorSav.getId());
	}
	
	/**
	 * 
	 */

	
	/*-------------------------------------------------------------------
	 *		FailTest para o CRUD de Colaborador
	 *-------------------------------------------------------------------*/
	
	
	/**
	 * 
	 */
	@Test(expected = IllegalArgumentException.class)
	public void insertColaboradorFail() 
	{
		Colaborador colaborador = null;
	    this.colaboradorService.insertColaborador(colaborador);
	    
	}
	
	/**
	 * 
	 */
	@Test(expected = IllegalArgumentException.class)
	public void findColaboradorByIdFail() 
	{
		Long id = new Long(null);
	     this.colaboradorService.findColaboradorById(id);
	}
	
	/**
	 * 
	 */
	@Test(expected = IllegalArgumentException.class)
	public void updateColaboradorFail() 
	{
		Colaborador colaborador = null;
	   this.colaboradorService.updateColaborador(colaborador);
	};
	
	/**
	 * 
	 */
	@Test(expected = IllegalArgumentException.class)
	public void deleteColaboradorFail() 
	{
		Long id = new Long(null);
		this.colaboradorService.deleteColaborador(id);		
	}
	
	
	
	/*-------------------------------------------------------------------
	 *		  PassTest para o CRUD de Certificado
	 *-------------------------------------------------------------------*/
	
	
	/**
	 * 
	 */
	@Test
	
	public void insertCertificadoPass() 
	{
		Certificado certifcado = this.getCertificado();
		Certificado certifcadoSav = this.colaboradorService.insertCertificado(certifcado);
		Assert.notNull(certifcadoSav);
		this.colaboradorService.deleteCertificado(certifcadoSav.getId());
	}
	
	
	/**
	 * 
	 */
	@Test
	
	public void findCertificadoByIdPass()
	{
		Certificado certifcadoSav = this.colaboradorService.insertCertificado(this.getCertificado());
		final Certificado certificado = this.colaboradorService.findCertificadoById(certifcadoSav.getId());
		Assert.notNull(certificado);
		this.colaboradorService.deleteCertificado(certifcadoSav.getId());
	}
	
	/**
	 * 
	 */
	@Test
	
	public void updateCertificadoPass() 
	{
		Certificado certificado = this.colaboradorService.insertCertificado(this.getCertificado());
	  	certificado.setTitulo("PHP");
		Certificado certifcadoSav = this.colaboradorService.updateCertificado(certificado);
		assertEquals(certifcadoSav.getTitulo(), "PHP");
		this.colaboradorService.deleteCertificado(certifcadoSav.getId());
	}
	
	/**
	 * 
	 */
	@Test(expected = IllegalArgumentException.class)
	public void deleteCertificadoPass() 
	{
		Certificado certifcadoSav = this.colaboradorService.insertCertificado(this.getCertificado());
		this.colaboradorService.deleteCertificado(certifcadoSav.getId());
		this.colaboradorService.findCertificadoById(certifcadoSav.getId());
	}
	
	/**
	 * 
	 */

	
	
	
	/*-------------------------------------------------------------------
	 *				 		   FailTest para o CRUD de Certificado
	 *-------------------------------------------------------------------*/
	
	
	/**
	 * 
	 */
	@Test(expected = IllegalArgumentException.class)
	public void insertCertificadoFail() 
	{
		Certificado certificado  = null;
		 this.colaboradorService.insertCertificado(certificado);
	    
	}
	
	/**
	 * 
	 */
	@Test(expected = IllegalArgumentException.class)
	public void findCertificadoByIdFail() 
	{
		Long id = new Long(null);
	   this.colaboradorService.findCertificadoById(id);
	}
	
	/**
	 * 
	 */
	@Test(expected = IllegalArgumentException.class)
	public void updateCerficidadoFail() 
	{
		Certificado certificado  = null;
		 this.colaboradorService.updateCertificado(certificado);
	};
	
	
	/**
	 * 
	 */
	@Test(expected = IllegalArgumentException.class)
	public void deleteCertificadoFail() 
	{
		Long id = new Long(null);
		this.colaboradorService.deleteCertificado(id);		
	}
	
	@Test
	
	public void listCertificadosByColaboradores() {
		Long id = new Long(1);
	//	Page<Certificado> certificados = this.colaboradorService.listCertificadosByColaboradores(id);
   //   System.out.println(" -==-=-=-=-=-=-=" + certificados.getTotalPages()); 
	}
	
	
	
	/*-------------------------------------------------------------------
	 *		 Criando obejtos para os testes
	 *-------------------------------------------------------------------*/
	
	
	
	/**
	 * 
	 */
	public Colaborador getColaborador() 
	{
		LocalDateTime date = LocalDateTime.now();
		RegimeDoContrato regimeDoContrato = RegimeDoContrato.ESTAGIO;
		Cargo cargo = Cargo.ARQUITETO;
		byte[] bytes = new byte[4];
		Colaborador colaborador = new Colaborador();
		colaborador.setNome("João");
		colaborador.setSobrenome("Santos");
		colaborador.setAtivo(true);
		colaborador.setDataDeNascimento(date);
		colaborador.setDataDeAdmissao(date);
		colaborador.setRegimeDoContrato(regimeDoContrato);
		colaborador.setCargo(cargo);
		colaborador.setContrato(bytes);
		return colaborador;
	}
	
	
	/**
	 * 
	 */
	public Certificado getCertificado() 
	{		
	byte[] bytes = new byte[4];
	LocalDateTime date = LocalDateTime.now();
	Certificado certificado = new Certificado();
	Colaborador colaborador = new Colaborador();
	colaborador = this.getColaborador();
	colaborador = this.colaboradorService.insertColaborador(colaborador);
	certificado.setTitulo("Angular 2");
	certificado.setCertificado(bytes);
	certificado.setDescricao("Bem loko");
	certificado.setData(date);
	certificado.setColaboradorId(colaborador);
	return certificado;	
	}
}