import {Component, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Broker} from "eits-ng2";
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import { TdDialogService } from '@covalent/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DesativaColaboradorComponent } from './../dialog/desativa-colaborador/desativa-colaborador.component';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Data } from '@angular/router';


/**
 * @title Basic table
 */

@Component({
  selector: 'app-lista-colaborador',
  templateUrl: './lista-colaborador.component.html',
  styleUrls: ['./lista-colaborador.component.css']
})



export class ListaColaboradorComponent {
  displayedColumns = ['Nome'];
  public colaboradores: any[] = [];
  filtro: any = {};
  
// colunas da tabela
  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'nome',  label: 'Nome', width: 150 },
    { name: 'sobrenome',  label: 'Sobrenome', width: 150 },
    { name: 'cargo',  label: 'Cargo', width: 150 },
    { name: 'regimeDoContrato',  label: 'Regime do Contrato', width: 150 },
    { name: 'ativo',  label: 'Ativo', width: 150 },
    { name: 'dataDeAdmissao',  label: 'Admissão', width: 150  },
    { name: 'dataDeDemissao',  label: 'Demissão', width: 150 },
    { name: 'acao',  label: 'Ações', width: 350 },
  ];

  cargo = [
    {value: 'ENGENHEIRO_SOFTWARE', viewValue: 'Engenheiro de Software'},
    {value: 'SUPORTE', viewValue: 'Suporte'},
    {value: 'ARQUITETO', viewValue: 'Arquiteto'},
    {value: 'UX', viewValue: 'UX'},
    {value: 'GERENTE_DE_PROJETO', viewValue: 'Gerente de Projeto'},
    {value: 'AUXILIAR_ADMISTRATIVO', viewValue: 'Auxiliar Admistrativo'},

  ];

  regimeContrato = [
    {value: 'PJ', viewValue: 'Pj'},
    {value: 'CLT', viewValue: 'Clt'},
    {value: 'ESTAGIO', viewValue: 'Estagio'},
    {value: 'BOLSISTA', viewValue: 'Bolsista'},
  ];

 sort =  {//Sort
    orders: [
        { direction: 'DESC', property: 'nome', nullHandlingHint: null }
    ]
};


// Objeto pageable
  pageable = {
    page: 0,
    size: 5,
    sort: this.sort
   
};

  ngOnInit()
   {
  this.listAllColaboradores(); 
    }

      constructor(private _dataTableService: TdDataTableService,private _dialogService: TdDialogService, public dialog: MatDialog) {}
   
      
  
      // captura eventos da paginação
  page(pagingEvent: IPageChangeEvent): void 
    { 
        this.pageable.page = pagingEvent.page -1;
        this.listAllColaboradores();
    }


// abrir op dialog para desativar colaborador
  openDialog(ide): void
   {
    let dialogRef = this.dialog.open(DesativaColaboradorComponent, {
      width: '450px',
      height:'450px',
      data:{id: ide}
    });
    dialogRef.afterClosed().subscribe(result => {
     console.log("fecho");
    });
  }



  // filtro
  public filterColaboradores= function()
  {
    console.log( this.filtro.nome)
    Broker.of("colaboradorService").promise("listColaboradoresByFilters", this.filtro.nome, this.filtro.sobrenome,this.filtro.cargo,
    this.filtro.regimeContrato, this.filtro.ativo, this.filtro.dataAdmissao,  this.filtro.dataDemissao, this.pageable)
    .then((result) => 
    {
      this.colaboradores = result.content;
    
    })
    .catch((message) =>console.log(message));
    console.log(this.colaboradores)
  }





// busca todos colaboradores
public listAllColaboradores()
{
  Broker.of("colaboradorService").promise("listAllColaboradore", this.pageable)
  .then((result) => 
  {
    this.colaboradores = result.content;
    console.log(this.colaboradores.length)
  })
  .catch((message) =>console.log(message));
}


public exibeAtivoColaborador(): void{
  let i:0;
  for( i= 0 ; i < this.colaboradores.length;i++){

    if(this.colaboradores[i])  
      {
       console.log("teste")
      }
  }


}




}


