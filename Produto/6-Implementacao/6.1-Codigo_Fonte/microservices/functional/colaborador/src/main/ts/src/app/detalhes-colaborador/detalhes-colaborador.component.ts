import { OnInit } from '@angular/core'; 
import {Broker} from "eits-ng2"; 
import { ActivatedRoute, Router } from '@angular/router'; 
import {Component, ViewChild} from '@angular/core'; 
import {DataSource} from '@angular/cdk/collections'; 
import {MatPaginator} from '@angular/material'; 
import {BehaviorSubject} from 'rxjs/BehaviorSubject'; 
import {Observable} from 'rxjs/Observable'; 
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core'; 
import { IPageChangeEvent } from '@covalent/core'; 
import { TdDialogService } from '@covalent/core'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'; 
import { DesativaColaboradorComponent } from './../desativa-colaborador/desativa-colaborador.component'; 
import { DetalhesCertificadoComponent } from './../detalhes-certificado/detalhes-certificado.component'; 
import 'rxjs/add/operator/startWith'; 
import 'rxjs/add/observable/merge'; 
import 'rxjs/add/operator/map'; 
import { Data } from '@angular/router'; 
@Component({
  selector: 'app-detalhes-colaborador',
  templateUrl: './detalhes-colaborador.component.html',
  styleUrls: ['./detalhes-colaborador.component.css']
})
export class DetalhesColaboradorComponent implements OnInit {


 
 public certificados: any[] = [];

 colaborador: any;
 filtro: any = {};
 id:any;


 // colunas da tabela
 configWidthColumns: ITdDataTableColumn[] = [
   { name: 'titulo',  label: 'Titulo', width: 250 },
   { name: 'data',  label: 'Data', width: 150, format: (value) =>{ { return this.formatarData(value)}}},
   { name: 'descricao',  label: 'Descricão', width: 450 },
   { name: 'acao',  label: 'Ações', width:350 },
 ];

 sort =  {//Sort
  orders: [
      { direction: 'DESC', property: 'id', nullHandlingHint: null }
  ]
};


pageable = {
  page: 0,
  size: 5,
  sort: this.sort
 
};
 

  constructor(public router: Router, public activatedRouter: ActivatedRoute, private _dataTableService: TdDataTableService, private _dialogService: TdDialogService, public dialog: MatDialog) 
  { 
  this.findColaborador();
   }




// lista os certificados de um colaborador a partir do Id do colaborador
//@param id
  listCertificadosByColaborador(id)
  {
    Broker.of("colaboradorService").promise("listCertificadosByColaboradores",id, this.pageable)
    .then((result) => {
   
           this.certificados = result.content;
           
              })
              .catch((message) =>console.log(message) );
      }

  ngOnInit()
   {
   
  }


  // abre o dialog para excluir
     openConfirm(id): void
      {
      this._dialogService.openConfirm({
        message: 'Deseja realmente deletar este certificado ?.',
        title: 'Deletar',
        cancelButton: 'Cancelar',
        acceptButton: 'Delete',
      }).afterClosed().subscribe((accept: boolean) => {
        if (accept) {
          Broker.of("colaboradorService").promise("deleteCertificado",id)
          .then((result) => {
         
                 this.certificados = result.content;
                 
                    })
                    .catch((message) =>console.log(message) );
        } 
      });

    }


// abre o dialog de detalhes
    openDialog(ide): void {
          let dialogRef = this.dialog.open(DetalhesCertificadoComponent, {
            width: '450px',
            height:'450px',
            data:{id: ide}
          });
          dialogRef.afterClosed().subscribe(result => {
           console.log("fecho");
            
          });
        }

          
  // paginação da tabela
  page(pagingEvent: IPageChangeEvent): void { 
       this.pageable.page = pagingEvent.page -1;
       let id = this.colaborador.id;
       this.listCertificadosByColaborador(id);
}




// buscar um colaborador pelo id
findColaborador()
{
  this.activatedRouter.params.subscribe(params => 
    {
        let id = params['id'];
        {
          Broker.of("colaboradorService").promise("findColaboradorById", id)
            .then((result) => {
                   this.colaborador = result;
                 this.id = this.colaborador.id;
                   this.listCertificadosByColaborador(id);
                      })
                      .catch((message) =>console.log(message));
              }
        
    });
}

// filtro de certificados
public filterCertificados = function()
{
  Broker.of("colaboradorService").promise("filterCertificados", this.filtro.titulo, this.filtro.descricao, this.pageable)
  .then((result) => 
  {
    this.certificados = result.content;
  })
  .catch((message) =>console.log(message));
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