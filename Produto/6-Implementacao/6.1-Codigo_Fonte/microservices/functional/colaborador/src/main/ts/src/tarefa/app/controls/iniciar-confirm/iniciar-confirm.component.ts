import { Router } from '@angular/router';
import { Broker } from 'eits-ng2';
import { TarefaCardComponent } from './../../views/tarefa/tarefa-card/tarefa-card.component';
import { Component, Inject } from "@angular/core";
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'iniciar-confirm',
    templateUrl: './iniciar-confirm.component.html'
})
export class IniciarConfirmComponent
{
    /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

    /*-------------------------------------------------------------------
    *                           CONSTRUCTOR
    *-------------------------------------------------------------------*/

    /**
     * 
     * @param dialogRef 
     * @param data 
     */
    constructor(public snackBar: MdSnackBar, public router: Router, public dialogRef: MdDialogRef<TarefaCardComponent>,

        @Inject(MD_DIALOG_DATA)
        public data: any
    ) {

    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    /**
     * 
     */
    onNoClick(): void {
        this.dialogRef.close();
        this.router.navigate([""]);
    }

    onYesClick(): void{
        Broker.of("tarefaService").promise("updateTarefaToEmExecucao", this.data.id)
        .then((result) =>{
            this.dialogRef.close(result);
            this.openSnackBar("Tarefa iniciada com sucesso!");
        })
        .catch((exception) =>{
            console.log(exception);
        })
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, "Ok", {
            duration: 5000,
        });
    }
}