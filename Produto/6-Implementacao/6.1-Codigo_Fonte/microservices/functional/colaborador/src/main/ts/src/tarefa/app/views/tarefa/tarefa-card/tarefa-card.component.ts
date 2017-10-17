import { OnInit, Output, EventEmitter } from '@angular/core';
import { ExcluirConfirmComponent } from './../../../controls/excluir-confirm/excluir-confirm.component';
import { IniciarConfirmComponent } from './../../../controls/iniciar-confirm/iniciar-confirm.component';
import { InvalidarConfirmComponent } from './../../../controls/invalidar-confirm/invalidar-confirm.component';
import { ImpedirConfirmComponent } from './../../../controls/impedir-confirm/impedir-confirm.component';
import { ConcluirConfirmComponent } from './../../../controls/concluir-confirm/concluir-confirm.component';
import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'tarefa-card',
    templateUrl: './tarefa-card.component.html'
})
export class TarefaCardComponent implements OnInit {
    
    /**
     * 
     * @param dialog 
     */
    constructor(public dialog: MdDialog) {

    }

    /**
     * 
     */
    ngOnInit(): void {
        
    }

    /**
     * 
     */
    @Input()
    titulo: string;

    /**
     * 
     */
    @Input()
    tarefa: any;

    /**
     * Emitter para quando deletar emitir para o list tirar o card da tarefa
     */
    @Output()
    onDeleteTarefa: EventEmitter<any> = new EventEmitter;

    /**
     * 
     */
    comentario: string;

    /**
     * Situação mockada para md-select
     */
    situacao: any = {
        INVALIDA: 'INVALIDA',
        EM_EXECUCAO: 'EM_EXECUCAO',
        EM_IMPEDIMENTO: 'EM_IMPEDIMENTO',
        A_FAZER: 'A_FAZER',
        CONCLUIDA: 'CONCLUIDA'
    }

    /**
     * Abrir dialog Concluir
     * Envia um this.tarefa.id no data
     */
    openDialogConcluirConfirm(): void {
        let dialogRef = this.dialog.open(ConcluirConfirmComponent, {
            width: '300px',
            data: {id: this.tarefa.id}
        });
        dialogRef.afterClosed().subscribe(result =>{
            if (result){
                this.tarefa = result;
            }
        });
    }

    /**
     * Abrir dialog Impedir
     * Envia um this.tarefa.id no data
     */
    openDialogImpedirConfirm(): void {
        let dialogRef = this.dialog.open(ImpedirConfirmComponent, {
            width: '300px',
            data: {id: this.tarefa.id}
        });
        dialogRef.afterClosed().subscribe(result =>{
            if (result){
                this.tarefa = result;
            }
        });
    }

    /**
     * Abrir dialog Invalidar
     * Envia um this.tarefa.id no data
     */
    openDialogInvalidarConfirm(): void {
        let dialogRef = this.dialog.open(InvalidarConfirmComponent, {
            width: '300px',
            data: {id: this.tarefa.id}
        });
        dialogRef.afterClosed().subscribe(result =>{
            if (result){
                this.tarefa = result;
            }
        });
    }

    /**
     * Abrir dialog Iniciar
     * Envia um this.tarefa.id no data
     */
    openDialogIniciarConfirm(): void {
        let dialogRef = this.dialog.open(IniciarConfirmComponent, {
            width: '300px',
            data: {id: this.tarefa.id}
        });
        dialogRef.afterClosed().subscribe(result =>{
            if (result){
                this.tarefa = result;
            }          
        });
    }

    /**
     * Abrir dialog Excluir
     * Envia um this.tarefa.id no data
     */
    openDialogExcluirConfirm(): void {
        let dialogRef = this.dialog.open(ExcluirConfirmComponent, {
            width: '300px',
            data: {id: this.tarefa.id}
        });
        dialogRef.afterClosed().subscribe(tarefaId =>{
            if (tarefaId){
                this.tarefa = tarefaId;
                this.onDeleteTarefa.emit(tarefaId);
            }
        });
    }

    /**
     * Controle de exibição de ícones para colocar em Em Execução
     */
    canUpdateToEmExecucao = function (situacao) {
        return situacao != this.situacao.EM_EXECUCAO;
    }

    /**
     * Controle de exibição de ícones para colocar em Invalida
     */
    canUpdateToInvalida = function (situacao) {
        return ((situacao == this.situacao.A_FAZER)
            || (situacao == this.situacao.EM_IMPEDIMENTO)
            || (situacao == this.situacao.EM_EXECUCAO))
    }

    /**
     * Controle de exibição de ícones para colocar em Em Impedimento
     */
    canUpdateToEmImpedimento = function (situacao) {
        return ((situacao == this.situacao.INVALIDA)
            || (situacao == this.situacao.EM_EXECUCAO))
    }

    /**
    * Controle de exibição de ícones para colocar em Concluida
     */
    canUpdateToConcluida = function (situacao) {
        return ((situacao != this.situacao.CONCLUIDA)
            && (situacao == this.situacao.EM_EXECUCAO))
    }

    /**
     * Controle de exibição de ícones para Excluir tarefa
     */
    canDelete = function (situacao) {
        return situacao == this.situacao.A_FAZER
            || situacao == this.situacao.INVALIDA
    }


}