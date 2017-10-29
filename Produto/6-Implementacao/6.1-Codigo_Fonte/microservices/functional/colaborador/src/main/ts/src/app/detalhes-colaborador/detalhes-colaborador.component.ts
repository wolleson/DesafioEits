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
import { DesativaColaboradorComponent } from './../dialog/desativa-colaborador/desativa-colaborador.component';
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


 displayedColumns = ['Nome'];
 public certificados: any[] = [];
 selectable: any;
 colaborador: any;

 configWidthColumns: ITdDataTableColumn[] = [
   { name: 'titulo',  label: 'Titulo', width: 150 },
   { name: 'data',  label: 'data', width: 150 },
   { name: 'descricao',  label: 'descricao', width: 450 },
   { name: 'acao',  label: 'Ações', width:350 },
 

 ];
 filteredData: any[] = this.certificados;
 filteredTotal: number = this.certificados.length;

 searchTerm: string = '';
 fromRow: number = 1;
 currentPage: number = 1;
 pageSize: number = 1;
 sortBy: string = 'first_name';
 selectedRows: any[] = [];
 sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

 

  constructor(public router: Router, public activatedRouter: ActivatedRoute, private _dataTableService: TdDataTableService, private _dialogService: TdDialogService, public dialog: MatDialog) { activatedRouter.params.subscribe(params => 
    {
        let id = params['id'];
        {
          Broker.of("colaboradorService").promise("findColaboradorById", id)
            .then((result) => {
                   this.colaborador = result;
                   let id = this.colaborador.id;
                   this.listCertificadosByColaborador(id);
                      })
                      .catch((message) =>console.log(message));
              }
        
    });
  
   }



  listCertificadosByColaborador(id){
    
    Broker.of("colaboradorService").promise("listCertificadosByColaboradores",id)
    .then((result) => {
   
           this.certificados = result.content;
           
              })
              .catch((message) =>console.log(message) );


      }

  ngOnInit() {
   
  }


   
     sort(sortEvent: ITdDataTableSortChangeEvent): void {
       this.sortBy = sortEvent.name;
       this.sortOrder = sortEvent.order;
       this.filter();
     }
   
     search(searchTerm: string): void {
       this.searchTerm = searchTerm;
       this.filter();
     }
   
     page(pagingEvent: IPageChangeEvent): void {
       this.fromRow = pagingEvent.fromRow;
       this.currentPage = pagingEvent.page;
       this.pageSize = pagingEvent.pageSize;
       this.filter();
     }
   
     filter(): void {
       let newData: any[] = this.certificados;
       let excludedColumns: string[] = this. configWidthColumns
       .filter((column: ITdDataTableColumn) => {
         return ((column.filter === undefined && column.hidden === true) ||
                 (column.filter !== undefined && column.filter === false));
       }).map((column: ITdDataTableColumn) => {
         return column.name;
       });
       newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
       this.filteredTotal = newData.length;
       newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
       newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
       this.filteredData = newData;
     }

     openConfirm(id): void {
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
        } else {
          // DO SOMETHING ELSE
        }
      });

    }



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





    }