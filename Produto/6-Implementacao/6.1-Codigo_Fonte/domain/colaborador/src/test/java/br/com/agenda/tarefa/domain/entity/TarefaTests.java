package br.com.agenda.tarefa.domain.entity;

import org.junit.Assert;
import org.junit.Test;


public class TarefaTests
{

	/**
	 * Atualizar uma tarefa para Em Impedimento para Em Execução deve passar
	 */
/*	@Test
	public void testCanUpdateToEmImpedimentoOnEmExecucaoMustPass()
	{
		final Tarefa tarefa = new Tarefa();
		tarefa.setSituacao( Situacao.EM_EXECUCAO );
		tarefa.canUpdateToEmImpedimento();
		System.out.println( tarefa.getSituacao() );
	}
	
	*//**
	 * Atualizar uma tarefa para Em Impedimento para Inválida deve passar
	 *//*
	@Test
	public void testCanUpdateToEmImpedimentoOnInvalidaMustPass()
	{
		final Tarefa tarefa = new Tarefa();
		tarefa.setSituacao(Situacao.INVALIDA);
		tarefa.canUpdateToEmImpedimento();
		System.out.println( tarefa.getSituacao() );
	}
	
	*//**
	 * Atualizar uma tarefa para Em Impedimento estando em A Fazer deve falhar
	 *//*
	@Test(expected=IllegalArgumentException.class)
	public void testCanUpdateToEmImpedimentoOnAFazerMustFail()
	{
		final Tarefa tarefa = new Tarefa();
		tarefa.setSituacao(Situacao.A_FAZER);
		tarefa.canUpdateToEmImpedimento();
		Assert.fail("O método deve falhar pois está A FAZER");
	}
	
	*//**
	 * Atualizar uma tarefa para Em Impedimento estando em Concluida deve falhar
	 *//*
	@Test(expected=IllegalArgumentException.class)
    public void testCanUpdateToEmImpedimentoOnConcluidaMustFail()
	{
		final Tarefa tarefa = new Tarefa();
		tarefa.setSituacao(Situacao.CONCLUIDA);
		tarefa.canUpdateToEmImpedimento();
		Assert.fail("O método deve falhar pois está CONCLUIDA");
	}
	
	*//**
	 * Atualizar uma tarefa para Inválida estando A Fazer deve falhar
	 *//*
	@Test
	public void testCanUpdateToInvalidaOnAFazerMustPass()
	{
		final Tarefa tarefa = new Tarefa();
		tarefa.setSituacao(Situacao.A_FAZER);
		tarefa.canUpdateToInvalida();
		System.out.println( tarefa.getSituacao() );
	}
	
	*//**
	 * Atualizar uma aterfa para Inválida estando Concluida deve falhar
	 *//*
	@Test(expected=IllegalArgumentException.class)
	public void testCanUpdateToInvalidadaOnConcluidaMustFail()
	{	
		final Tarefa tarefa = new Tarefa();
		tarefa.setSituacao(Situacao.CONCLUIDA);
		tarefa.canUpdateToInvalida();		
		Assert.fail("O método deve falhar pois está CONCLUIDA");
	}*/
}
