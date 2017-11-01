package br.com.agenda.tarefa.domain.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;

import org.junit.Test;

import br.com.colaborador.colaborador.domain.entity.Colaborador;


public class ColaboradorTest 
{

	
	@Test
	public void validaDataNacimentoPass() 
	{
		final Colaborador colaborador = new Colaborador();
		LocalDateTime  date = LocalDateTime.of(2000, Month.APRIL, 4, 22, 30);
		colaborador.setDataDeNascimento(date);
		colaborador.validaDataNascimento();
		System.out.println( colaborador.getDataDeNascimento() );
	}
	
	@Test
	public void validaDataDemissaoPass() 
	{
		final Colaborador colaborador = new Colaborador();
		LocalDateTime  date = LocalDateTime.of(2016, Month.APRIL, 4, 22, 30);
		LocalDateTime  date2 = LocalDateTime.of(2017, Month.APRIL, 4, 22, 30);
		colaborador.setDataDeAdmissao(date);
		colaborador.setDataDeDemissao(date2);
		colaborador.validaDataDemissao();
		System.out.println( colaborador.getDataDeDemissao() );
	}
	
	@Test
	public void validaNumeroCarteiraTrabalhoPass() 
	{
		final Colaborador colaborador = new Colaborador();
		colaborador.setNumeroCarteiraTrabalho("111");
		colaborador.validaNumeroCarteiraTrabalho();
		System.out.println(colaborador.getNumeroCarteiraTrabalho());
	}
	
	
	@Test(expected=IllegalArgumentException.class)
	public void validaNumeroCarteiraTrabalhoFail() 
	{
		final Colaborador colaborador = new Colaborador();
		colaborador.setNumeroCarteiraTrabalho("aaaa");
		colaborador.validaNumeroCarteiraTrabalho();
		System.out.println(colaborador.getNumeroCarteiraTrabalho());
	} 
	
	
	@Test(expected=IllegalArgumentException.class)
	public void validaDataDemissaoFail() 
	{
		final Colaborador colaborador = new Colaborador();
		LocalDateTime  date = LocalDateTime.of(2017, Month.APRIL, 4, 22, 30);
		LocalDateTime  date2 = LocalDateTime.of(2000, Month.APRIL, 4, 22, 30);
		colaborador.setDataDeAdmissao(date);
		colaborador.setDataDeDemissao(date2);
		colaborador.validaDataDemissao();
		System.out.println( colaborador.getDataDeDemissao() );
	}
	
	@Test(expected=IllegalArgumentException.class)
	public void validaDataNacimentoFail() 
	{
		final Colaborador colaborador = new Colaborador();
		LocalDateTime  date = LocalDateTime.of(2019, Month.APRIL, 4, 22, 30);
		colaborador.setDataDeNascimento(date);
		colaborador.validaDataNascimento();
		System.out.println( colaborador.getDataDeNascimento() );
	}	
	
	
	
	
}
