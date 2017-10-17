package br.com.colaborador.colaborador.domain.entity;

import org.directwebremoting.annotations.DataTransferObject;

@DataTransferObject(type = "enum")
public enum Cargo {

	ENGENHEIRO_SOFTWARE,
	SUPORTE,
	ARQUITETO,
	UX,
	GERENTE_DE_PROJETO,
	AUXILIAR_ADMISTRATIVO
	
}
