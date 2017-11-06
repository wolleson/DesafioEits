-- Schema: colaborador

-- DROP SCHEMA colaborador;

CREATE SCHEMA colaborador
  AUTHORIZATION "colaboradores-colaborador";




-- Table: colaborador.certificado

-- DROP TABLE colaborador.certificado;

CREATE TABLE colaborador.certificado
(
  id bigserial NOT NULL,
  atualizacao timestamp without time zone,
  criacao timestamp without time zone NOT NULL,
  versao bigint NOT NULL,
  certificado bytea,
  colaborador_id bigint NOT NULL,
  data timestamp without time zone NOT NULL,
  descricao character varying(255),
  titulo character varying(144) NOT NULL,
  CONSTRAINT certificado_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE colaborador.certificado
  OWNER TO "colaboradores-colaborador";

  
  -- Table: colaborador.certificado_auditado

-- DROP TABLE colaborador.certificado_auditado;

CREATE TABLE colaborador.certificado_auditado
(
  id bigint NOT NULL,
  revisao bigint NOT NULL,
  tipo_revisao smallint,
  certificado bytea,
  colaborador_id bigint,
  data timestamp without time zone,
  descricao character varying(255),
  titulo character varying(144),
  CONSTRAINT certificado_auditado_pkey PRIMARY KEY (id, revisao),
  CONSTRAINT fk733rh6fc07xhoj4f1j20bfbjv FOREIGN KEY (revisao)
      REFERENCES colaborador.revisao (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE colaborador.certificado_auditado
  OWNER TO "colaboradores-colaborador";

  -- Table: colaborador.colaborador

-- DROP TABLE colaborador.colaborador;

CREATE TABLE colaborador.colaborador
(
  id bigserial NOT NULL,
  atualizacao timestamp without time zone,
  criacao timestamp without time zone NOT NULL,
  versao bigint NOT NULL,
  ativo boolean NOT NULL DEFAULT true,
  cargo integer NOT NULL,
  contrato bytea,
  data_de_admissao timestamp without time zone NOT NULL,
  data_de_demissao timestamp without time zone,
  data_de_nascimento timestamp without time zone NOT NULL,
  justificativa character varying(255),
  motivo_desligamento character varying(255),
  nome character varying(144) NOT NULL,
  numero_carteira_trabalho character varying(14),
  regime_do_contrato integer NOT NULL,
  sobrenome character varying(144) NOT NULL,
  CONSTRAINT colaborador_pkey PRIMARY KEY (id),
  CONSTRAINT uk_92lq2vv47rmo9gv1mbsp7c9ew UNIQUE (numero_carteira_trabalho)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE colaborador.colaborador
  OWNER TO "colaboradores-colaborador";
  
  
  -- Table: colaborador.colaborador_auditado

-- DROP TABLE colaborador.colaborador_auditado;

CREATE TABLE colaborador.colaborador_auditado
(
  id bigint NOT NULL,
  revisao bigint NOT NULL,
  tipo_revisao smallint,
  ativo boolean DEFAULT true,
  cargo integer,
  contrato bytea,
  data_de_admissao timestamp without time zone,
  data_de_demissao timestamp without time zone,
  data_de_nascimento timestamp without time zone,
  justificativa character varying(255),
  motivo_desligamento character varying(255),
  nome character varying(144),
  numero_carteira_trabalho character varying(14),
  regime_do_contrato integer,
  sobrenome character varying(144),
  CONSTRAINT colaborador_auditado_pkey PRIMARY KEY (id, revisao),
  CONSTRAINT fk8hqtovqsfutpkfolq6ktayuef FOREIGN KEY (revisao)
      REFERENCES colaborador.revisao (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE colaborador.colaborador_auditado
  OWNER TO "colaboradores-colaborador";

-- Table: colaborador.entidade_revisao

-- DROP TABLE colaborador.entidade_revisao;

CREATE TABLE colaborador.entidade_revisao
(
  revisao bigint NOT NULL,
  entidade character varying(255),
  CONSTRAINT fks6354amh77svj71q8xjc2y49q FOREIGN KEY (revisao)
      REFERENCES colaborador.revisao (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE colaborador.entidade_revisao
  OWNER TO "colaboradores-colaborador";
  
  
  -- Table: colaborador.revisao

-- DROP TABLE colaborador.revisao;

CREATE TABLE colaborador.revisao
(
  id bigserial NOT NULL,
  id_usuario bigint,
  "timestamp" bigint NOT NULL,
  CONSTRAINT revisao_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE colaborador.revisao
  OWNER TO "colaboradores-colaborador";
  
  
  -- Table: colaborador.schema_version

-- DROP TABLE colaborador.schema_version;

CREATE TABLE colaborador.schema_version
(
  version_rank integer NOT NULL,
  installed_rank integer NOT NULL,
  version character varying(50) NOT NULL,
  description character varying(200) NOT NULL,
  type character varying(20) NOT NULL,
  script character varying(1000) NOT NULL,
  checksum integer,
  installed_by character varying(100) NOT NULL,
  installed_on timestamp without time zone NOT NULL DEFAULT now(),
  execution_time integer NOT NULL,
  success boolean NOT NULL,
  CONSTRAINT schema_version_pk PRIMARY KEY (version)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE colaborador.schema_version
  OWNER TO "colaboradores-colaborador";

-- Index: colaborador.schema_version_ir_idx

-- DROP INDEX colaborador.schema_version_ir_idx;

CREATE INDEX schema_version_ir_idx
  ON colaborador.schema_version
  USING btree
  (installed_rank);

-- Index: colaborador.schema_version_s_idx

-- DROP INDEX colaborador.schema_version_s_idx;

CREATE INDEX schema_version_s_idx
  ON colaborador.schema_version
  USING btree
  (success);

-- Index: colaborador.schema_version_vr_idx

-- DROP INDEX colaborador.schema_version_vr_idx;

CREATE INDEX schema_version_vr_idx
  ON colaborador.schema_version
  USING btree
  (version_rank);



