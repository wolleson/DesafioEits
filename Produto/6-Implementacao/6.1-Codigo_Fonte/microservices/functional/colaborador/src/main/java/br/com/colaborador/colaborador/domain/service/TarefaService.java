package br.com.colaborador.colaborador.domain.service;





public class TarefaService  
{
//	/*-------------------------------------------------------------------
//	 *				 		     ATTRIBUTES
//	 *-------------------------------------------------------------------*/
//	
//	/**
//	 * Repositório de tarefa
//	 */
//	@Autowired
//	private ITarefaRepository tarefaRepository;
//	
//	/**
//	 * Repositório de histórico
//	 */
//	@Autowired
//	private IHistoricoRepository historicoRepository;
//	
//	/**
//	 * Serviço de mensagem
//	 */
//	@Autowired
//	private MessageSource messageSource;
//
//	/**
//	 * Hash da microservice de Usuário
//	 */
//	@Autowired
//	private IUsuarioResource usuarioResource; 
//	
//	/*-------------------------------------------------------------------
//	 *				 		     SERVICES
//	 *-------------------------------------------------------------------*/
//	
//	//--------------
//	// Manutenção de tarefa
//	//--------------
//	
//	/**
//	 * Serviço para visualizar detalhes de {@link Tarefa}
//	 * @param id
//	 * @return tarefa
//	 */
//	@Override
//	@Transactional(readOnly=true)
//	public Tarefa findTarefaById( long id )
//	{
//		final Tarefa tarefa = this.tarefaRepository.findOne( id );
//		Assert.notNull( tarefa, "A tarefa não foi encontrada" );
//		
//		final Usuario usuario = this.findUsuarioById(tarefa.getDonoTarefa().getId());
//		tarefa.setDonoTarefa(usuario);
//		
//		return tarefa;
//	}
//	
//	/**
//	 * Serviço para inserir um registro {@link Tarefa}
//	 * @param tarefa
//	 * @return tarefa
//	 */
//	public Tarefa insertTarefa( Tarefa tarefa )
//	{
//		Assert.notNull( tarefa, this.messageSource.getMessage( "tarefa.null", null, LocaleContextHolder.getLocale() ) );
//		tarefa.validateDatas();
//		
//		final Situacao situacaoInicial = Situacao.A_FAZER;
//		tarefa.setSituacao( situacaoInicial );		
//		final LocalDateTime dataAlteracao = LocalDateTime.now();
//		
//		//recuperar do microserviço de usuário através do findByEmail
//		final String usuarioEmail =  ContextHolder.getAuthenticatedUser().getEmail();
//		final Usuario criadoPor = this.findUsuarioByEmail(usuarioEmail);
//		
//		tarefa.setCriadoPor( criadoPor ); 
//		insertHistorico(tarefa, "Tarefa criada.", dataAlteracao, criadoPor, situacaoInicial, situacaoInicial);
//		tarefa = this.tarefaRepository.save( tarefa );
//		return tarefa;
//	}
//	
//	/**
//	 * Serviço para atualizar um registro de {@link Tarefa}
//	 * @param tarefa
//	 * @return tarefa
//	 */
//	public Tarefa updateTarefa( Tarefa tarefa ) 
//	{
//		Assert.notNull( tarefa.getId(), this.messageSource.getMessage( "tarefa.null", null, LocaleContextHolder.getLocale() ) );
//		Tarefa tarefaSaved = this.tarefaRepository.findOne( tarefa.getId() );
//		
//		tarefa.validateDatas();
//		tarefa.setSituacao( tarefaSaved.getSituacao() );
//		final Situacao situacaoAtual = tarefa.getSituacao();
//		final Situacao situacaoAnterior = tarefaSaved.getSituacao();
//		
//		final LocalDateTime dataAlteracao = LocalDateTime.now();
//		
//		//recuperar do microserviço de usuário através do findByEmail
//		final String usuarioEmail =  ContextHolder.getAuthenticatedUser().getEmail();
//		final Usuario alteradoPor = this.findUsuarioByEmail(usuarioEmail);
//		
//		insertHistorico(tarefa, "Tarefa alterada.", dataAlteracao, alteradoPor, situacaoAnterior, situacaoAtual);
//		return this.tarefaRepository.save( tarefa );
//	}	
//	
//	/**
//	 * Serviço atualizar uma situação para Em Execução de uma {@link Tarefa}
//	 * @param id
//	 * @return tarefa
//	 */
//	public Tarefa updateTarefaToEmExecucao( Long tarefaId ) 
//	{
//		Assert.notNull( tarefaId, this.messageSource.getMessage( "tarefa.null", null, LocaleContextHolder.getLocale() ) );
//		Tarefa tarefaSaved = this.tarefaRepository.findOne( tarefaId );
//		
//		tarefaSaved.canUpdateToEmExecucao();
//		final Situacao situacaoAnterior = tarefaSaved.getSituacao();
//		final Situacao situacaoAtual = Situacao.EM_EXECUCAO;
//		tarefaSaved.setSituacao( situacaoAtual );
//		tarefaSaved.setDataExecucaoIniciada( LocalDateTime.now() );	
//		
//		final LocalDateTime dataAlteracao = LocalDateTime.now();
//		
//		//recuperar do microserviço de usuário através do findByEmail
//		final String usuarioEmail =  ContextHolder.getAuthenticatedUser().getEmail();
//		final Usuario alteradoPor = this.findUsuarioByEmail(usuarioEmail);
//		
//		insertHistorico(tarefaSaved, "Tarefa em execução (inciada).", dataAlteracao, alteradoPor, situacaoAnterior, situacaoAtual); //alterar para alteradoPor onde tarefaSaved.getDonoTarefa()
//		
//
//		return this.tarefaRepository.save( tarefaSaved );
//	}
//
//	/**
//	 * Serviço atualizar uma situação para Concluida de uma {@link Tarefa}
//	 * @param id
//	 * @param comentario
//	 * @return tarefa
//	 */
//	public Tarefa updateTarefaToConcluida( Long tarefaId, final String comentario ) 
//	{
//		Assert.notNull( tarefaId, this.messageSource.getMessage( "tarefa.null", null, LocaleContextHolder.getLocale() ) );		
//		Tarefa tarefaSaved = this.tarefaRepository.findOne( tarefaId );	
//		
//		tarefaSaved.canUpdateToConcluida();
//		final Situacao situacaoAtual = Situacao.CONCLUIDA;
//		final Situacao situacaoAnterior = tarefaSaved.getSituacao();
//		tarefaSaved.setSituacao( situacaoAtual );
//		tarefaSaved.setDataConclusao( LocalDateTime.now() );		
//
//		tarefaSaved.setTempoGasto( this.calculateTimeDifference(tarefaSaved.getDataExecucaoIniciada(), tarefaSaved.getDataConclusao() ) );
//		
//		final LocalDateTime dataAlteracao = LocalDateTime.now();
//		
//		//recuperar do microserviço de usuário através do findByEmail
//		final String usuarioEmail =  ContextHolder.getAuthenticatedUser().getEmail();
//		final Usuario alteradoPor = this.findUsuarioByEmail(usuarioEmail);
//		
//		insertHistorico(tarefaSaved, comentario, dataAlteracao, alteradoPor, situacaoAnterior, situacaoAtual);  //alterar para alteradoPor onde tarefaSaved.getDonoTarefa()
//		return this.tarefaRepository.save( tarefaSaved );
//	}
//	
//	/**
//	 * Serviço atualizar uma situação para Em Impedimento de uma {@link Tarefa}
//	 * @param id
//	 * @param comentario
//	 * @return tarefa
//	 */
//	public Tarefa updateTarefaToEmImpedimento( Long tarefaId, String comentario ) 
//	{
//		Assert.notNull( tarefaId, this.messageSource.getMessage( "tarefa.null", null, LocaleContextHolder.getLocale() ) );		
//		Tarefa tarefaSaved = this.tarefaRepository.findOne( tarefaId );	
//		
//		tarefaSaved.canUpdateToEmImpedimento();
//		final Situacao situacaoAnterior = tarefaSaved.getSituacao();
//		final Situacao situacaoAtual = Situacao.EM_IMPEDIMENTO;
//		tarefaSaved.setSituacao( situacaoAtual );
//		
//		final LocalDateTime dataAlteracao = LocalDateTime.now();
//		//recuperar do microserviço de usuário através do findByEmail
//		
//		final String usuarioEmail =  ContextHolder.getAuthenticatedUser().getEmail();
//		final Usuario alteradoPor = this.findUsuarioByEmail(usuarioEmail);
//		
//		insertHistorico(tarefaSaved, comentario, dataAlteracao, alteradoPor, situacaoAnterior, situacaoAtual);  //alterar para alteradoPor onde tarefaSaved.getDonoTarefa()
//		return this.tarefaRepository.save( tarefaSaved );
//	}
//	
//	/**
//	 * Serviço atualizar uma situação para Inválida de uma {@link Tarefa}
//	 * @param id
//	 * @param comentario
//	 * @return tarefa
//	 */
//	public Tarefa updateTarefaToInvalida( Long tarefaId, String comentario) 
//	{
//		Assert.notNull( tarefaId, this.messageSource.getMessage( "tarefa.null", null, LocaleContextHolder.getLocale() ) );
//		Tarefa tarefaSaved = this.tarefaRepository.findOne( tarefaId );
//		
//		tarefaSaved.canUpdateToInvalida();
//		final Situacao situacaoAnterior = tarefaSaved.getSituacao();
//		final Situacao situacaoAtual = Situacao.INVALIDA;
//		tarefaSaved.setSituacao( situacaoAtual );
//		
//		final LocalDateTime dataAlteracao = LocalDateTime.now();
//		
//		//recuperar do microserviço de usuário através do findByEmail
//		final String usuarioEmail =  ContextHolder.getAuthenticatedUser().getEmail();
//		final Usuario alteradoPor = this.findUsuarioByEmail(usuarioEmail);
//		
//		insertHistorico(tarefaSaved, comentario, dataAlteracao, alteradoPor, situacaoAnterior, situacaoAtual);
//		return this.tarefaRepository.save( tarefaSaved );
//	}
//	
//	/**
//	 * Deleta um registro de {@link Tarefa}
//	 * @param id
//	 * @return tarefa
//	 */
//	public void deleteTarefa( Long id )
//	{
//		Assert.notNull( id, this.messageSource.getMessage( "tarefa.null", null, LocaleContextHolder.getLocale() ) );
//		Tarefa tarefaDeleted = this.tarefaRepository.findOne( id );
//		tarefaDeleted.validateExclusao();
//		this.tarefaRepository.delete(tarefaDeleted);
//	}
//	
//	/**
//	 * Listagem de {@link Tarefa} por filtros
//	 * @param filter
//	 * @param descricao
//	 * @param dataInicial
//	 * @param dataPrevistaFinal
//	 * @param donoTarefa
//	 * @param situacao
//	 * @param prioridade
//	 * @param pageRequest
//	 * @return tarefas
//	 */
//	@Override
//	@Transactional( readOnly = true )
//	public Page<Tarefa> listTarefasByFilters( String filter, String descricao, LocalDateTime dataInicial,
//											LocalDateTime dataPrevistaFinal, LocalDateTime dataConclusao, Long donoTarefa, 
//											Long criadoPor, Situacao situacao, Prioridade prioridade, PageRequest pageable ) 
//	{
//		
//		Page<Tarefa> tarefas = this.tarefaRepository.listByFilters(filter, descricao, dataInicial, dataPrevistaFinal, dataConclusao, donoTarefa, criadoPor, situacao, prioridade, pageable);
//		for(Tarefa tarefa: tarefas.getContent())
//		{
//			tarefa.setDonoTarefa(findUsuarioById(tarefa.getDonoTarefa().getId()));
//			tarefa.setCriadoPor(findUsuarioById(tarefa.getCriadoPor().getId()));
//		}
//		return tarefas;
//	}
//
//	/**
//	 * Listagem de {@link Historico} por ID de Tarefa
//	 * @param tarefaId
//	 * @param pageable
//	 * @return historicos
//	 */
//	@Override
//	@Transactional( readOnly = true )
//	public Page<Historico> listHistoricosByTarefaId( Long tarefaId, PageRequest pageable) 
//	{
//		Page<Historico> historicos = this.historicoRepository.listHistoricosByTarefaId( tarefaId, pageable );
//		for(Historico historico: historicos.getContent())
//		{
//			historico.setAlteradoPor(findUsuarioById(historico.getAlteradoPor().getId()));
//		}
//		return historicos;
//	}
//	
//	/**
//	 * Serviço para calcular o tempo gasto de Data para Hora de uma {@link Tarefa}
//	 * @param fromDateInHour
//	 * @param toDateInHour
//	 * @return tempGasto
//	 */
//	private Integer calculateTimeDifference ( final LocalDateTime fromDateInHour, final LocalDateTime toDateInHour ) 
//	{
//		LocalDateTime tempDateTime = LocalDateTime.from( fromDateInHour );
//		long hours = tempDateTime.until( toDateInHour, ChronoUnit.HOURS );
//		tempDateTime = tempDateTime.plusHours( hours );
//		final Integer tempGasto = ( int ) ( long ) hours;		
//		return tempGasto;
//	}
//	
//	/**
//	 * Serviço para inserir um histórico
//	 * @param tarefa
//	 * @param comentario
//	 * @param dataAlteracao
//	 * @param alteradoPor
//	 * @param situacaoAnterior
//	 * @param situacaoAtual
//	 * @return historico
//	 */
//	private Historico insertHistorico( Tarefa tarefa, String comentario, LocalDateTime dataAlteracao, Usuario alteradoPor, Situacao situacaoAnterior, Situacao situacaoAtual )
//	{
//		Historico historico = new Historico();
//		historico.setComentario( comentario );
//		historico.setDataAlteracao( dataAlteracao );	
//		historico.setAlteradoPor( alteradoPor );
//		historico.setSituacaoAnterior( situacaoAnterior );
//		historico.setSituacaoAtual( situacaoAtual );
//		historico.setTarefa( tarefa );
//		return this.historicoRepository.save( historico );
//	}
//	
//	//--------------
//	// Restful de Usuário
//	//--------------
//	
//	/**
//	 * Listagem de {@link Usuario} por filtros
//	 * @param filter
//	 * @param pageable
//	 * @return
//	 */
//	public Page<Usuario> listUsuariosByFilters(String filter, PageRequest pageable)
//	{
//		return this.usuarioResource.listUsuariosByFilters(filter, pageable);
//	}
//	
//	/**
//	 * Serviço para visualizar detalhes de {@link Usuario} buscando por id
//	 * @param id
//	 * @return
//	 */
//	public Usuario findUsuarioById(long id)
//	{
//		return this.usuarioResource.findUsuarioById(id);		
//	}
//	
//	/**
//	 * Serviço para visualizar detalhes de {@link Usuario} buscando por email
//	 * @param email
//	 * @return
//	 */
//	public Usuario findUsuarioByEmail (String email)
//	{
//		return this.usuarioResource.findUsuarioByEmail(email);
//	}
}
