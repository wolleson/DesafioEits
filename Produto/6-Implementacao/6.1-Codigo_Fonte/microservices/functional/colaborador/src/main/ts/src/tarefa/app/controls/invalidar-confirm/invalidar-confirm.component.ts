import { Broker } from 'eits-ng2';
import { TarefaCardComponent } from './../../views/tarefa/tarefa-card/tarefa-card.component';
import { Component, Inject } from "@angular/core";
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'invalidar-confirm',
    templateUrl: './invalidar-confirm.component.html'
})
export class InvalidarConfirmComponent
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
        Broker.of("tarefaService").promise("updateTarefaToInvalida", this.data.id, this.data.comentario)
        .then((result) => {
            this.dialogRef.close(result);
            this.openSnackBar("Tarefa invalidada com sucesso!");
        })
        .catch((exception) =>{
            this.openSnackBar(exception.message);
        })
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, "Ok", {
            duration: 5000,
        });
    }
}