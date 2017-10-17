import { Http } from '@angular/http';
import { Broker } from 'eits-ng2';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'events';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'tarefa-form',
    templateUrl: './tarefa-form.component.html'
})
export class TarefaFormComponent implements OnInit {

    /**
     * 
     */
    tarefa: any = {};

    /**
     * 
     */
    usuarios: any[] = [];

    /**
     * 
     */
    tarefaForm: FormGroup;

    /**
     * 
     */
    http: Http;

    /**
     * 
     * @param snackBar 
     */
    constructor(public snackBar: MdSnackBar, http: Http, fb: FormBuilder, public activatedRoute: ActivatedRoute, public router: Router) {
        this.http = http;
        this.tarefaForm = fb.group({
            tituloForm: ['', Validators.compose(
                [Validators.required,
                Validators.maxLength(144)]
            )],
            dataInicialForm: ['', Validators.required],
            prioridadeForm: ['', Validators.required],
            dataFinalPrevistaForm: ['', Validators.required],
            tempoEstimadoForm: ['', Validators.compose(
                [Validators.required,
                Validators.min(1)]
            )],
            donoTarefaForm: ['', Validators.required],
            descricaoForm: ['', Validators.maxLength(255)]
        });
    }

    /**
     * 
     */
    ngOnInit(): void {

        let tarefaId: number = this.activatedRoute.snapshot.params['id'];
        if (tarefaId) {
            this.findTarefaById(tarefaId);
        };

        this.listUsuariosByFilters(null, null);
    }

    /**
     * 
     */
    prioridades = [
        { value: 'BAIXA', viewValue: 'BAIXA' },
        { value: 'MEDIA', viewValue: 'MEDIA' },
        { value: 'ALTA', viewValue: 'ALTA' },
        { value: 'URGENTE', viewValue: 'URGENTE' }
    ];

    /**
     * 
     * @param tarefa 
     */
    public insertTarefa(tarefa): void {
        if (this.tarefaForm.valid) {
            Broker.of("tarefaService").promise("insertTarefa", tarefa)
                .then((tarefa) => {
                    this.openSnackBar("Tarefa salva com sucesso!");
                    this.router.navigate([""]);
                })
                .catch((exception) => {
                    this.openSnackBar(exception.message);
                })
        }
    }

    /**
     * 
     * @param tarefa 
     */
    public updateTarefa(tarefa): void {
        if (this.tarefaForm.valid) {
            Broker.of("tarefaService").promise("updateTarefa", tarefa)
                .then((tarefa) => {
                    this.openSnackBar("Tarefa editada com sucesso!");
                    this.router.navigate([""]);
                })
                .catch((exception) => {
                    this.openSnackBar(exception.message);
                })
        }
    }

    /**
     * 
     */
    public findTarefaById = function (tarefaId) {
        Broker.of("tarefaService").promise("findTarefaById", + tarefaId)
            .then((result) => {
                this.tarefa = result;
            })
    }

    /**
     * 
     */
    public listUsuariosByFilters = function (filter, pageable) {
        Broker.of("tarefaService").promise("listUsuariosByFilters", filter, pageable)
            .then((result) => {
                this.usuarios = result.content;
            })
            .catch((exception) => {
                console.log(exception.message);
            });
    }

    /**
     * 
     * @param message 
     */
    openSnackBar(message: string) {
        this.snackBar.open(message, "Ok", {
            duration: 5000,
        });
    }

    /**
     * 
     * @param usuario 
     */
    displayAutocompleteUsuarioNome(usuario): string {
        return usuario ? usuario.nome : "";
    }

}