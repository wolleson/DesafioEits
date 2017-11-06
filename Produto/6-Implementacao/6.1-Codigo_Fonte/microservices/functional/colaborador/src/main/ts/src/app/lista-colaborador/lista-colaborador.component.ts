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
import { DesativaColaboradorComponent } from './../desativa-colaborador/desativa-colaborador.component';
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
    { name: 'nome',  label: 'Nome', width: 200 },
    { name: 'sobrenome',  label: 'Sobrenome', width: 180 },
    { name: 'cargo',  label: 'Cargo', width: 150 },
    { name: 'regimeDoContrato',  label: 'Regime do Contrato', width: 150 },
    { name: 'ativo',  label: 'Ativo', width: 150 , format: (value) =>{ { return this.fortamaAtivoColaborador(value)}}},
    { name: 'dataDeAdmissao',  label: 'Admissão', width: 150, format: (value) =>{ { return this.formatarData(value)}}},
    { name: 'dataDeDemissao',  label: 'Demissão', width: 150, format: (value) =>{ { return this.formatarData(value)}}},
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
    size: 10,
    sort: this.sort
   
};

  ngOnInit()
   {
    }

      constructor(private _dataTableService: TdDataTableService,private _dialogService: TdDialogService, public dialog: MatDialog)
      {
        this.listAllColaboradores();
        
      }
   
      
  
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
      this.listAllColaboradores();      
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
      this.exibeAtivoColaborador();
    
    })
    .catch((message) =>console.log(message));
    console.log(this.colaboradores)
  }





// Busca todos colaboradores
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


// metodo para formatar o campo ativo antes de exibir na tabela, muda o true para "Avito" e o false para "Desativado"
public fortamaAtivoColaborador(ativo): String
 {
    if(ativo == true)  
      {
        return "Ativo";
      } else{
        return "Desativado";
      }
  }



// metodo para formatar a data
    public formatarData(data): String
     {
      var d = new Date(data),
          mes = '' + (d.getMonth() + 1),
          dia = '' + d.getDate(),
          ano = d.getFullYear();
      if (mes.length < 2) mes = '0' + mes;
      if (dia.length < 2) dia = '0' + dia;
      return [dia, mes, ano].join('/'); // "join" é o caracter para separar a formatação da data, neste caso, a barra (/)
  }
}


