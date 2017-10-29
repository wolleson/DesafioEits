import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ColaboradorCadastroComponent } from './colaborador-cadastro/colaborador-cadastro.component';
import { appRoutingProviders, RoutingModule } from './routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn, CovalentSearchModule, CovalentDataTableModule, CovalentPagingModule, TdDialogService } from '@covalent/core';
import { CovalentDialogsModule } from '@covalent/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  
} from '@angular/material';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import { ListaColaboradorComponent } from './lista-colaborador/lista-colaborador.component';
import { DesativaColaboradorComponent } from './dialog/desativa-colaborador/desativa-colaborador.component';
import { DetalhesColaboradorComponent } from './detalhes-colaborador/detalhes-colaborador.component';
import { CertificadoCadastroComponent } from './certificado-cadastro/certificado-cadastro.component';
import { DetalhesCertificadoComponent } from './detalhes-certificado/detalhes-certificado.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradorCadastroComponent,
    ListaColaboradorComponent,
    DesativaColaboradorComponent,
    DetalhesColaboradorComponent,
    CertificadoCadastroComponent,
    DetalhesCertificadoComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    CovalentSearchModule,
    CovalentDataTableModule,
    CovalentPagingModule,
    CovalentDialogsModule,
    RoutingModule,
    CovalentLayoutModule,
    
    
  ],

  entryComponents: [
    DesativaColaboradorComponent,
    DetalhesCertificadoComponent
  ],

  providers: [
    TdDataTableService,
    
   

    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
