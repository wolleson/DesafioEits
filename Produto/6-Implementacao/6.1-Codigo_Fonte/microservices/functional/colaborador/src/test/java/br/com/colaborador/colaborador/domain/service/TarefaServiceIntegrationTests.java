package br.com.colaborador.colaborador.domain.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.time.LocalDateTime;

import javax.validation.ValidationException;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

//import br.com.agenda.tarefa.domain.AbstractIntegrationTests;
//import br.com.agenda.tarefa.domain.entity.Prioridade;
//import br.com.agenda.tarefa.domain.entity.Situacao;
//import br.com.agenda.tarefa.domain.entity.Tarefa;
//import br.com.agenda.usuario.domain.entity.Usuario;

public class TarefaServiceIntegrationTests 
{
//	/**
//	 * 
//	 */
//	@Autowired
//	private TarefaService tarefaService;
//	
//	/**
//	 * 
//	 */
//	@Test
//	@Sql({//
//		"/dataset/tarefa/tarefa.sql"//
//	})
//	public void insertTarefaMustPass()
//	{
//		Tarefa tarefa = this.getTarefa();
//		Tarefa tarefaSaved = this.tarefaService.insertTarefa( tarefa );	
//		assertNotNull( tarefaSaved );
//	}
//	
//	/**
//	 * 
//	 */
//	@Test(expected=ValidationException.class)
//	@Sql({//
//		"/dataset/tarefa/tarefa.sql"//
//	})
//	public void insertTarefaWithoutTituloMustFail()
//	{
//		Tarefa tarefa = this.getTarefa();
//		tarefa.setTitulo( null );
//		this.tarefaService.insertTarefa( tarefa );
//		Assert.fail();
//	}
//
//	/**
//	 * 
//	 */
//	@Test
//	@Sql({//
//		"/dataset/tarefa/tarefa.sql"//
//	})
//	public void findTarefaMustPass()
//	{
//		Tarefa tarefa = tarefaService.findTarefaById( 1001L );
//		assertNotNull( tarefa );
//		assertNotNull( tarefa.getId() );
//	}
//	
//	/**
//	 * 
//	 */
//	@Test(expected = AssertionError.class)
//	@Sql({//
//		"/dataset/tarefa/tarefa.sql"//
//	})
//	public void findTarefaMustFail()
//	{
//		tarefaService.findTarefaById( 1002L );
//	    Assert.fail();
//	}
//
//	/**
//	 * 
//	 */
//	@Test
//	@Sql({//
//		"/dataset/tarefa/tarefa.sql"//
//	})
//	public void updateTarefaMustPass()
//	{
//		Tarefa tarefa = tarefaService.findTarefaById( 1001L );
//		tarefa.setDescricao( " alo alo marciano " );
//		Tarefa tarefaSaved = tarefaService.updateTarefa( tarefa );
//		assertNotNull( tarefaSaved );
//	}
//	
//	/**
//	 * 
//	 */
//	@Test(expected = IllegalArgumentException.class)
//	@Sql({//
//		"/dataset/tarefa/tarefa.sql"//
//	})
//	public void updateTarefaMustFail()
//	{
//		Tarefa tarefa = tarefaService.findTarefaById( 1001L );
//		tarefa.setDataInicial( null );
//		tarefaService.updateTarefa( tarefa );
//		Assert.fail();
//	}
//	
//	/**
//	 * 
//	 */
//	@Test
//	@Sql({//
//		"/dataset/tarefa/tarefa.sql",//
//		"/dataset/tarefa/historico.sql"//
//	})
//	public void updateTarefaToEmExecucaoMustPass()
//	{
//		Tarefa tarefa = tarefaService.updateTarefaToEmExecucao( 1001L );
//		assertEquals( tarefa.getSituacao(), Situacao.EM_EXECUCAO );
//	}
//	
//	/**
//	 * 
//	 */
//	@Test(expected=IllegalArgumentException.class)
//	@Sql({//
//		"/dataset/tarefa/tarefa.sql",//
//		"/dataset/tarefa/historico.sql"//
//	})
//	public void updateTarefaToEmExecucaoMustFail()
//	{
//		Tarefa tarefa = tarefaService.updateTarefaToEmExecucao( 1003L );
//		assertEquals( tarefa.getSituacao(), Situacao.EM_EXECUCAO );
//	}
//	
//	/**
//	 * 
//	 */
//	@Test
//	@Sql({//
//		"/dataset/tarefa/tarefa.sql",//
//		"/dataset/tarefa/historico.sql"//
//	})
//	public void updateTarefaToEmImpedimentoMustPass()
//	{
//		Tarefa tarefa = tarefaService.updateTarefaToEmImpedimento( 1002L, "Pq sim" );
//		assertEquals( tarefa.getSituacao(), Situacao.EM_IMPEDIMENTO );
//	}
//	
////	@Test
////	@Sql({//
////		"/dataset/tarefa/tarefa.sql",//
////		"/dataset/tarefa/historico.sql"//
////	})
////	public void findTarefaWithHistoricosByIdMustPass()
////	{
////		
////		Tarefa tarefa = this.tarefaService.findTarefaById( 1001L );
////		tarefa.setHistoricoList( this.tarefaService.listHistoricosById( 1001L) );
////		
////		Assert.assertNotNull(tarefa);
////		Assert.assertNotNull(tarefa.getHistoricoList());
////	}
//	
////	/**
////	 * 
////	 */
////	@Test
////	@Sql({//
////		"/dataset/tarefa/tarefa.sql",//
////		"/dataset/tarefa/historico.sql"//
////	})
////	public void listTarefaByIdMustPass()
////	{	
////		final Page<Tarefa> tarefas = this.tarefaService.listTarefasByFilters("1001", null, null, null, null, null, null, null, null, null);
////		
////		Assert.assertNotNull( tarefas );
////		Assert.assertEquals(1, tarefas.getTotalElements() );
////	}
//	
//	/**
//	 * 
//	 * @return
//	 */
//	private Tarefa getTarefa()
//	{
//		Tarefa tarefa = new Tarefa();
//		tarefa.setTitulo("Lorem ipsum");
//		tarefa.setDataInicial( LocalDateTime.now() );
//		tarefa.setDataPrevistaFinal( LocalDateTime.now().plusDays(5) );
//		tarefa.setTempoEstimado( 5 );
//		tarefa.setPrioridade(Prioridade.ALTA);
//		tarefa.setDonoTarefa( new Usuario( 1L ) );
//		tarefa.setCriadoPor( new Usuario( 1L ) );
//		return tarefa;
//	}
}
