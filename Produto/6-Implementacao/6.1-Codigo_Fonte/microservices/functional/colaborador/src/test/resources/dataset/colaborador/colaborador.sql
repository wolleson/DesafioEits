SET search_path = colaborador, pg_catalog;
--
-- Table: colaborador.colaborador

--DROP TABLE colaborador.colaborador;

CREATE TABLE colaborador.colaborador
(
  id bigserial NOT NULL,
  atualizacao timestamp without time zone,
  criacao timestamp without time zone NOT NULL,
  versao bigint NOT NULL,
  ativo boolean NOT NULL DEFAULT true,
  cargo integer NOT NULL,
  contrato bytea,
  data_de_admissao date NOT NULL,
  data_de_demissao date,
  data_de_nascimento date NOT NULL,
  justificativa character varying(255),
  motivo_desligamento character varying(255),
  nome character varying(144) NOT NULL,
  numero_carteira_trabalho character varying(14),
  regime_do_contrato integer NOT NULL,
  sobrenome character varying(144) NOT NULL,
  CONSTRAINT colaborador_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE colaborador.colaborador
  OWNER TO "colaboradores-colaborador";



INSERT INTO colaborador.colaborador(
            id, atualizacao, criacao, versao, ativo, cargo, contrato, data_de_admissao, 
            data_de_demissao, data_de_nascimento, justificativa, motivo_desligamento, 
            nome, numero_carteira_trabalho, regime_do_contrato, sobrenome)
    VALUES (1, now(),now(), 2, true, 2, null, '2017-03-10',null,'2017-03-10','nada','nada' 
            ,'joam', 111,1, 'momo');

            
            
            
			INSERT INTO colaborador.certificado(
            id, atualizacao, criacao, versao, certificado, colaborador_id, 
            data, descricao, titulo)
    VALUES (2, now(),now(), 2, null, 1, 
            '2017-03-10', 'descricao', 'teste');
			
--CREATE extension unaccent