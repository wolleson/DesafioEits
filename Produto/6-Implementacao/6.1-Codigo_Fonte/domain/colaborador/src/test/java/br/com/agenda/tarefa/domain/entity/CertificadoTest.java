package br.com.agenda.tarefa.domain.entity;

import java.time.LocalDate;

import org.junit.Test;

import br.com.colaborador.colaborador.domain.entity.Certificado;

public class CertificadoTest {
	
	@Test
	public void validaDataPass() 
	{
		final Certificado certificado = new Certificado();
		LocalDate date = LocalDate.of(2000, 11, 12);
		certificado.setData(date);
		certificado.validaData();
		System.out.println( certificado.getData() );
	}

	
	@Test(expected=IllegalArgumentException.class)
	public void validaDataFail() 
	{
		final Certificado certificado = new Certificado();
		LocalDate date = LocalDate.of(2019, 11, 12);
		certificado.setData(date);
		certificado.validaData();
		System.out.println( certificado.getData() );
	}
}
