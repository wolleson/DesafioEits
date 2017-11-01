package br.com.agenda.tarefa.domain.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;

import org.junit.Test;

import br.com.colaborador.colaborador.domain.entity.Certificado;

public class CertificadoTest {
	
	@Test
	public void validaDataPass() 
	{
		final Certificado certificado = new Certificado();
		LocalDateTime  date = LocalDateTime.of(2000, Month.APRIL, 4, 22, 30);
		certificado.setData(date);
		certificado.validaData();
		System.out.println( certificado.getData() );
	}

	
	@Test(expected=IllegalArgumentException.class)
	public void validaDataFail() 
	{
		final Certificado certificado = new Certificado();
		LocalDateTime  date = LocalDateTime.of(2019, Month.APRIL, 4, 22, 30);
		certificado.setData(date);
		certificado.validaData();
		System.out.println( certificado.getData() );
	}
}
