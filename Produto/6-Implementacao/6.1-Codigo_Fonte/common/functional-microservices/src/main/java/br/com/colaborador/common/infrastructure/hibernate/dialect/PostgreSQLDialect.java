package br.com.colaborador.common.infrastructure.hibernate.dialect;

import br.com.colaborador.common.infrastructure.hibernate.functions.PostgreSQLFilterFunction;

/**
 * 
 * @author rodrigo@eits.com.br
 */
public class PostgreSQLDialect extends org.hibernate.dialect.PostgreSQL9Dialect 
{
	/**
	 * 
	 */
	public PostgreSQLDialect() 
	{
		super.registerFunction("FILTER", new PostgreSQLFilterFunction());
	}
}
