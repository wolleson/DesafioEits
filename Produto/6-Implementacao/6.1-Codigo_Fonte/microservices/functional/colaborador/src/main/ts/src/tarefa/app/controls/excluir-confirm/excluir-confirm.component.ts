import { Broker } from 'eits-ng2';
import { TarefaCardComponent } from './../../views/tarefa/tarefa-card/tarefa-card.component';
import { Component, Inject } from "@angular/core";
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'excluir-confirm',
    templateUrl: './excluir-confirm.component.html'
})
export class ExcluirConfirmComponent
{
    /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

    /**
     * 
     */
    comentarioFormControl = new FormControl('', [
        Validators.required
    ]
    )


    /*-------------------------------------------------------------------
    *                           CONSTRUCTOR
    *-------------------------------------------------------------------*/

    /**
     * 
     * @param dialogRef 
     * @param data 
     */
    constructor(public snackBar: MdSnackBar, public dialogRef: MdDialogRef<TarefaCardComponent>,

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
    }


    onYesClick(): void{
        Broker.of("tarefaService").promise("deleteTarefa", this.data.id)
        .then((result) =>{
            this.dialogRef.close(this.data.id);
            this.openSnackBar("Tarefa deletada com sucesso!");
        })
        .catch((exception) =>{
            this.openSnackBar(exception.message);
            this.dialogRef.close();
        })
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, "Ok", {
            duration: 5000,
        });
    }
}