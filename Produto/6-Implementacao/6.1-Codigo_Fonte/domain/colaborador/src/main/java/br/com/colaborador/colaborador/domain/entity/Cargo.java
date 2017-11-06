package br.com.colaborador.colaborador.domain.entity;

import org.directwebremoting.annotations.DataTransferObject;

@DataTransferObject(type = "enum")
public enum Cargo {

	ENGENHEIRO_SOFTWARE,// 0
	SUPORTE,// 1
	ARQUITETO,// 2
	UX,// 3
	GERENTE_DE_PROJETO,// 4
	AUXILIAR_ADMISTRATIVO// 5
}
