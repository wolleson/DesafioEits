package br.com.colaborador.colaborador.domain.service;

import static org.junit.Assert.*;

import java.time.LocalDate;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.util.Assert;

import br.com.colaborador.colaborador.domain.AbstractIntegrationTests;
import br.com.colaborador.colaborador.domain.entity.Cargo;
import br.com.colaborador.colaborador.domain.entity.Colaborador;
import br.com.colaborador.colaborador.domain.entity.RegimeDoContrato;

public class ColaboradorSeviceTest extends AbstractIntegrationTests{

	@Autowired
	private ColaboradorService colaboradorService;

	@Test
//	@Sql({//
//		"/dataset/tarefa/colaborador.sql"//
//	})
	public void insertColaborador() 
	{
		Colaborador colaborador = this.getColaborador();
		Colaborador colaboradorSav = this.colaboradorService.insertColaborador(colaborador);
		System.out.println(colaboradorSav.getNome()); 
		Assert.notNull(colaboradorSav);
	}

	public Colaborador getColaborador() 
	{
		LocalDate date = LocalDate.of(2015, 11, 12);
		RegimeDoContrato regimeDoContrato = RegimeDoContrato.ESTAGIO;
		Cargo cargo = Cargo.ARQUITETO;
		byte z = 111;
		Colaborador colaborador = new Colaborador();
		colaborador.setNome("teste");
		colaborador.setSobrenome("teste2");
		colaborador.setAtivo(true);
		colaborador.setDataDeNascimento(date);
		colaborador.setDataDeAdmissao(date);
		colaborador.setRegimeDoContrato(regimeDoContrato);
		colaborador.setCargo(cargo);
		colaborador.setContrato(z);
		return colaborador;
	}
}