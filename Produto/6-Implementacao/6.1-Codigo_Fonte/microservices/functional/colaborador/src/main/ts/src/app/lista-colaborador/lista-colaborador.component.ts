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
  selectable: any;

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
  filteredData: any[] = this.colaboradores;
  filteredTotal: number = this.colaboradores.length;

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 1;
  sortBy: string = 'first_name';
  selectedRows: any[] = [];
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  ngOnInit() {
  
    
      Broker.of("colaboradorService").promise("listColaboradorByNome")
      .then((result) => 
      {
        this.colaboradores = result.content;
       
      })
      .catch((message) =>console.log(message));

      this.filter();
      }

      constructor(private _dataTableService: TdDataTableService,private _dialogService: TdDialogService, public dialog: MatDialog) {}
   
      
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
          let newData: any[] = this.colaboradores;
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
      



  openDialog(ide): void {

    let dialogRef = this.dialog.open(DesativaColaboradorComponent, {
      width: '450px',
      height:'450px',
      data:{id: ide}
    });
    dialogRef.afterClosed().subscribe(result => {
     console.log("fecho");
      
    });
  }

}


