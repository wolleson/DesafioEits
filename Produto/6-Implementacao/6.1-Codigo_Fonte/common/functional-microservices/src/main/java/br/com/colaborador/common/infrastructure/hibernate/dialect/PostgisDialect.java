package br.com.colaborador.common.infrastructure.hibernate.dialect;

import br.com.colaborador.common.infrastructure.hibernate.functions.PostgreSQLFilterFunction;

/**
 * Created by eduardo on 17/07/17.
 */
public class PostgisDialect extends org.hibernate.spatial.dialect.postgis.PostgisDialect
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public PostgisDialect()
	{
		super.registerFunction( "FILTER", new PostgreSQLFilterFunction() );
	}
}
