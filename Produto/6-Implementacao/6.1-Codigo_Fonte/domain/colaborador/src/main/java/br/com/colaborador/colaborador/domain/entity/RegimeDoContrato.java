package br.com.colaborador.colaborador.domain.entity;

import org.directwebremoting.annotations.DataTransferObject;

@DataTransferObject(type = "enum")
public enum RegimeDoContrato {
		
	PJ,			//0
	CLT,		//1
	ESTAGIO,	//2
	BOLSISTA	//3

}
