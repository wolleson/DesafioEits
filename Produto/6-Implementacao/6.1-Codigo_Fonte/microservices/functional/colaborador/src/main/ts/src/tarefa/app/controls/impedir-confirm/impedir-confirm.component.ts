import { Broker } from 'eits-ng2';
import { TarefaCardComponent } from './../../views/tarefa/tarefa-card/tarefa-card.component';
import { Component, Inject } from "@angular/core";
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'impedir-confirm',
    templateUrl: './impedir-confirm.component.html',
})
export class ImpedirConfirmComponent
{
    /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

    /**
     * 
     */
    meuForm: FormGroup;

    /*-------------------------------------------------------------------
    *                           CONSTRUCTOR
    *-------------------------------------------------------------------*/

    /**
     * 
     * @param dialogRef 
     * @param data 
     */
    constructor(fb: FormBuilder, public snackBar: MdSnackBar, public dialogRef: MdDialogRef<TarefaCardComponent>,
        @Inject(MD_DIALOG_DATA)
        public data: any) 
    {
        this.meuForm = fb.group({
            comentario: ['', Validators.compose([
                Validators.required, Validators.maxLength(144)
            ])]
        })
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
        Broker.of("tarefaService").promise("updateTarefaToEmImpedimento", this.data.id, this.data.comentario)
        .then((result) =>{
            this.dialogRef.close(result);
            this.openSnackBar("Tarefa impedida com sucesso!");
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