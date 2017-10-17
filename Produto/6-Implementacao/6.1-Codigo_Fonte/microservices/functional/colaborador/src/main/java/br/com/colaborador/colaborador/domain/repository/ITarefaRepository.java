package br.com.colaborador.colaborador.domain.repository;



public interface ITarefaRepository  
{
//	/**
//	 * 
//	 * @param filter
//	 * @param descricao
//	 * @param dataInicial
//	 * @param dataPrevistaFinal
//	 * @param dataConclusao
//	 * @param donoTarefa
//	 * @param criadoPor
//	 * @param situacao
//	 * @param prioridade
//	 * @param pageable
//	 * @return
//	 */
//	@Query(value="FROM Tarefa tarefa " +
//			  "WHERE ("
//			  		+ "(FILTER (tarefa.id, :filter) = TRUE "
//			  		+ "OR FILTER (tarefa.titulo, :filter) = TRUE) "
//			  		+ "AND ((:descricao IS NULL) OR (:descricao = tarefa.descricao)) "
//			  		+ "AND ("
//			  				+ "((:dataInicial < NOW()) OR (:dataInicial = tarefa.dataInicial) OR (:dataInicial IS NULL)) "
//			  				+ "AND ((:dataPrevistaFinal > NOW()) OR (:dataPrevistaFinal = tarefa.dataPrevistaFinal) OR (:dataPrevistaFinal IS NULL)) "
//			  				+ "AND ((:dataConclusao <= NOW() OR (:dataConclusao = tarefa.dataConclusao) OR (:dataConclusao IS NULL)))"
//			  			+ ") "
//			  		+ "AND ((:donoTarefa IS NULL) OR (:donoTarefa = tarefa.donoTarefa.id)) "
//			  		+ "AND ((:criadoPor IS NULL) OR (:criadoPor = tarefa.criadoPor.id)) "
//			  		+ "AND ((:situacao IS NULL) OR (:situacao = tarefa.situacao)) "
//			  		+ "AND ((:prioridade IS NULL) OR (:prioridade = tarefa.prioridade)) "
//			  + ")"
//	)
//	public Page<Tarefa> listByFilters(	@Param("filter") String filter, 
//										@Param("descricao") String descricao, 
//										@Param("dataInicial") LocalDateTime dataInicial,
//										@Param("dataPrevistaFinal") LocalDateTime dataPrevistaFinal,
//										@Param("dataConclusao") LocalDateTime dataConclusao,
//										@Param("donoTarefa") Long donoTarefa,
//										@Param("criadoPor") Long criadoPor,
//										@Param("situacao") Situacao situacao,								
//										@Param("prioridade") Prioridade prioridade, 
//										Pageable pageable );
}
