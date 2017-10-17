/**
 * 
 */
package br.com.colaborador.common.application.restful;

import java.util.Locale;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.colaborador.common.application.i18n.ResourceBundleMessageSource;

/**
 * @author rodrigo
 *
 */
@RestController
public class BundleResource
{
	/*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 *
	 */
	@Autowired
	private ResourceBundleMessageSource messageSource;

	/*-------------------------------------------------------------------
	 * 		 					RESOURCES
	 *-------------------------------------------------------------------*/
	/**
	 *
	 * @param lang
	 * @return
	 */
	@RequestMapping(value = "/bundles", method = RequestMethod.GET)
	public Properties listMessageBundles( Locale locale )
	{
		return this.messageSource.getProperties( locale );
	}
}
