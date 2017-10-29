import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { ListaColaboradorComponent } from './../../lista-colaborador/lista-colaborador.component';
import {Broker} from "eits-ng2";
@Component({
  selector: 'app-desativa-colaborador',
  templateUrl: './desativa-colaborador.component.html',
  styleUrls: ['./desativa-colaborador.component.css']
})
export class DesativaColaboradorComponent {

colaborador: any;

  constructor(public dialogRef: MatDialogRef<DesativaColaboradorComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any, ) 
    {
              Broker.of("colaboradorService").promise("findColaboradorById", data.id)
                .then((result) => {
                       this.colaborador = result;
                          })
                          .catch((message) =>console.log(message));   
        }
  
     

  onNoClick(){
    console.log("oi");
    this.dialogRef.close("fecha"); 

  }
 
  ngOnInit() {
  }

  public insertColaborador(colaborador): void {
  
      Broker.of("colaboradorService").promise("insertColaborador", colaborador)
            .then((colaborador) => {
            console.log("Foi");
            this.dialogRef.close();
            })
            .catch((message) =>console.log(message));
    }

}
