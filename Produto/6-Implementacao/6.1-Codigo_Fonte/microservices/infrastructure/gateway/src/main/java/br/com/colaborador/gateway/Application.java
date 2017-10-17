package br.com.colaborador.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * 
 * @author rodrigo.p.fraga
 */
@EnableZuulProxy
@EnableEurekaClient
@SpringBootApplication
@Controller
public class Application
{
	/**
	 * @param args
	 */
	public static void main( String[] args )
	{
		SpringApplication.run( Application.class, args );
	}

	@GetMapping("/")
	public String home()
	{
		return "redirect:/tarefa";
	}
}