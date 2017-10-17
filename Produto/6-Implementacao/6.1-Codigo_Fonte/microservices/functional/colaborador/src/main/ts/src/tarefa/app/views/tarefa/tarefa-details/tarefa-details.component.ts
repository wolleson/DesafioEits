import { Broker } from 'eits-ng2';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tarefa-details',
    templateUrl: './tarefa-details.component.html'
})
export class TarefaDetailsComponent  implements OnInit
{
    /**
     * 
     */
    @Input()
    tarefa: any;

    /**
     * 
     */
    ngOnInit(): void {
        let tarefaId: number = this.activatedRoute.snapshot.params['id'];
        if (tarefaId)
        {
            this.findTarefaById(tarefaId);
        }
    }

    /**
     * 
     * @param activatedRoute 
     */
    constructor(public activatedRoute: ActivatedRoute) { }

    /**
     * @param tarefaId
     */
    public findTarefaById = function(tarefaId){
        Broker.of("tarefaService").promise("findTarefaById", + tarefaId)
        .then((result) => {
            this.tarefa = result;
        })
    }

}