import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { ListaColaboradorComponent } from './../lista-colaborador/lista-colaborador.component';
import {Broker} from "eits-ng2";
@Component({
  selector: 'app-desativa-colaborador',
  templateUrl: './desativa-colaborador.component.html',
  styleUrls: ['./desativa-colaborador.component.css']
})
export class DesativaColaboradorComponent {

colaborador: any;
justificatica;
dataDemissao;
motivo;


  constructor(public dialogRef: MatDialogRef<DesativaColaboradorComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any, ) 
    {
              Broker.of("colaboradorService").promise("findColaboradorById", data.id)
                .then((result) => {
                        this.colaborador = result;
                        this.dataDemissao = this.colaborador.dataDeDemissao;
                        this.justificatica =   this.colaborador.justificativa;
                        this.motivo =  this.colaborador.motivoDesligamento;
                          })
                          .catch((message) =>console.log(message));   
        }
  
     

  onNoClick(){
    this.dialogRef.close("fecha"); 
  }
 
  ngOnInit() {
  }


  // atualiza o certificado 
  public insertColaborador(): void {
  this.colaborador.ativo = false;
  this.colaborador.dataDeDemissao = this.dataDemissao;
  this.colaborador.justificativa = this.justificatica
  this.colaborador.motivoDesligamento  = this.motivo;
      Broker.of("colaboradorService").promise("updateColaborador", this.colaborador)
            .then((colaborador) => {
            this.dialogRef.close();
            })
            .catch((message) =>console.log(message));
    }

}
