import { Broker } from 'eits-ng2';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tarefa-details',
    templateUrl: './tarefa-details-historico.component.html'
})
export class TarefaDetailsHistoricoComponent implements OnInit {

    /**
     * 
     */
    public historicos: any[] = []

    /**
     * @param activatedRoute
     */
    constructor(public activatedRoute: ActivatedRoute) {

    }

    /**
     * 
     */
    ngOnInit(): void {
        let tarefaId: number = this.activatedRoute.snapshot.params['id'];
        this.listHistoricosByTarefaId(tarefaId);
    }

    /**
     * 
     */
    public listHistoricosByTarefaId = function (tarefaId) {

        Broker.of("tarefaService").promise("listHistoricosByTarefaId", tarefaId, null)
            .then((result) => {
                this.historicos = result.content;
            })
            .catch((exception) => {
                console.log(exception.message);
            });

    }

}