package br.com.agenda.usuario;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import br.com.colaborador.common.CommonConfiguration;
import br.com.colaborador.common.domain.entity.IEntity;

/**
 * 
 * @author rodrigo.p.fraga
 */
@EnableDiscoveryClient
@EntityScan(basePackageClasses = {
	IEntity.class,
	Application.class
})
@SpringBootApplication(scanBasePackageClasses = {
	CommonConfiguration.class,
	Application.class
})
public class Application
{
	/**
	 * 
	 * @param args
	 */
	public static void main( String[] args )
	{
		SpringApplication.run( Application.class, args );
	}
	/*-------------------------------------------------------------------
	 * 		 					  BEANS
	 *-------------------------------------------------------------------*/
}
