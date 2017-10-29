SET search_path = colaborador, pg_catalog;
--
-- Table: colaborador.colaborador

DROP TABLE colaborador.certificado;

CREATE TABLE colaborador.certificado
(
  id bigserial NOT NULL,
  atualizacao timestamp without time zone,
  criacao timestamp without time zone NOT NULL,
  versao bigint NOT NULL,
  certificado bytea,
  colaborador_id bigint NOT NULL,
  data date NOT NULL,
  descricao character varying(255),
  titulo character varying(144) NOT NULL,
  CONSTRAINT certificado_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE colaborador.certificado
  OWNER TO "colaboradores-colaborador";

INSERT INTO colaborador.certificado(
            id, atualizacao, criacao, versao, certificado, colaborador_id, 
            data, descricao, titulo)
    VALUES (2, now(),now(), 2, null, 1, 
            '2017-03-10', 'descricao', 'teste');


			
			
--CREATE extension unaccent