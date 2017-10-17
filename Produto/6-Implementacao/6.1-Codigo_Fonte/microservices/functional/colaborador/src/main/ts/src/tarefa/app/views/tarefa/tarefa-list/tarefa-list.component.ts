import { Broker } from 'eits-ng2';
import { ConcluirConfirmComponent } from './../../../controls/concluir-confirm/concluir-confirm.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tarefa-list',
    templateUrl: './tarefa-list.component.html'
})
export class TarefaListComponent implements OnInit {

    public tarefas: any[] = [];

    filtro: any = {};

    prioridades = [
        { value: 'BAIXA', viewValue: 'BAIXA' },
        { value: 'MEDIA', viewValue: 'MEDIA' },
        { value: 'ALTA', viewValue: 'ALTA' },
        { value: 'URGENTE', viewValue: 'URGENTE' },
        { value: null, viewValue: 'NENHUMA'}
    ];

    situacoes = [
        { value: 'EM_EXECUCAO', viewValue: 'EM EXECUCAO' },
        { value: 'EM_IMPEDIMENTO', viewValue: 'EM IMPEDIMENTO' },
        { value: 'INVALIDA', viewValue: 'INVALIDA' },
        { value: 'CONCLUIDA', viewValue: 'CONCLUIDA' },
        { value: 'A_FAZER', viewValue: 'A FAZER' },
        { value: null, viewValue: 'NENHUMA'}
    ];

    constructor() {

    }


    ngOnInit(): void {
        this.listTarefasByFilters(null, null, null, null, null, null, null, null, null, null);
    }

    public removeTarefa = function (tarefaId) {
        let tarefasId = this.tarefas.map((tarefa) => {
            return tarefa.id;
        });
        let idx = tarefasId.indexOf(tarefaId);
        if (idx > -1) {
            this.tarefas.splice(idx, 1);
        }
    }

    public listTarefasByFilters = function (filter, descricao, dataInicial,
        dataPrevistaFinal, dataConclusao, donoTarefa,
        criadoPor, situacao, prioridade, pageable) {

        Broker.of("tarefaService").promise("listTarefasByFilters", filter, descricao, dataInicial,
            dataPrevistaFinal, dataConclusao, donoTarefa,
            criadoPor, situacao, prioridade, pageable)
            .then((result) => {
                this.tarefas = result.content;
            })
            .catch((exception) => {
                console.log(exception.message);
            });

    }

    public filtrarTarefa = function () {

        this.listTarefasByFilters(this.filtro.filter, this.filtro.descricao, this.filtro.dataInicial,
            this.filtro.dataPrevistaFinal, this.filtro.dataConclusao, this.filtro.donoTarefa,
            this.filtro.criadoPor, this.filtro.situacao, this.filtro.prioridade, this.filtro.pageable)
    }


    public listUsuariosByFilters = function (filter, pageable) {
        Broker.of("tarefaService").promise("listUsuariosByFilters", filter, pageable)
            .then((result) => {
                this.usuarios = result.content;
            })
            .catch((exception) => {
                console.log(exception.message);
            });
    }

    displayAutocompleteUsuarioNome(usuario): string {
        return usuario ? usuario.nome : "";
    }
}