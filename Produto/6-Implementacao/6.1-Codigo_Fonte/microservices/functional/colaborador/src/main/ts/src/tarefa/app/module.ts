
// import { ConsultarUsuariosComponent } from './controls/consultar-usuarios/consultar-usuarios.component';
import { CopyrightFooterComponent } from './controls/copyright-footer/copyright-footer.component';
import { InvalidarConfirmComponent } from './controls/invalidar-confirm/invalidar-confirm.component';
import { IniciarConfirmComponent } from './controls/iniciar-confirm/iniciar-confirm.component';
import { ExcluirConfirmComponent } from './controls/excluir-confirm/excluir-confirm.component';
import { ImpedirConfirmComponent } from './controls/impedir-confirm/impedir-confirm.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ConcluirConfirmComponent } from './controls/concluir-confirm/concluir-confirm.component';
import { TarefaDetailsHistoricoComponent } from './views/tarefa/tarefa-details-historico/tarefa-details-historico.component';
import { TarefaFormComponent } from './views/tarefa/tarefa-form/tarefa-form.component';
import { TarefaCardComponent } from './views/tarefa/tarefa-card/tarefa-card.component';
import { TarefaDetailsComponent } from './views/tarefa/tarefa-details/tarefa-details.component';
import { TarefaListComponent } from './views/tarefa/tarefa-list/tarefa-list.component';
import { AppComponent } from './app.component';
import { TarefaViewComponent } from './views/tarefa/tarefa-view.component';
//===============================ANGULAR MODULES=================================
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdSelectModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdToolbarModule,
  MdGridListModule,
  MdTooltipModule,  
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Md2DatepickerModule } from 'md2/datepicker';
//===============================COVALENT MODULES================================
import {
  CovalentChipsModule,
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentFileModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMessageModule,
  CovalentPagingModule,
  CovalentStepsModule,
  TdDialogService,
  TdLayoutComponent,
} from '@covalent/core';
//===============================APP MODULES=====================================
import { appRoutingProviders, RoutingModule } from './routing.module';
import 'rxjs/add/observable/throw';
//==============================APP SERVICES=====================================
//==============================APP COMPONENTS===================================

//=============================APP DIRECTIVES====================================

//===============================APP MODELS======================================

// Ngx-Translate
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, 'static/i18n/', '.json');
}

/**
 *
 */
@NgModule({
  declarations: [
     AppComponent,
    //TAREFA
    TarefaViewComponent,
    TarefaListComponent,
    TarefaFormComponent,
    TarefaCardComponent,
    TarefaDetailsComponent,
    TarefaDetailsHistoricoComponent,
    
    CopyrightFooterComponent,
    // ConsultarUsuariosComponent,

    ConcluirConfirmComponent,
    ImpedirConfirmComponent,
    IniciarConfirmComponent,
    ExcluirConfirmComponent,
    InvalidarConfirmComponent,
    ConcluirConfirmComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentChipsModule,
    CovalentFileModule,
    CovalentExpansionPanelModule,
    CovalentPagingModule,
    CovalentLoadingModule,
    CovalentMediaModule,
    CovalentMessageModule,
    CovalentCommonModule,
    CovalentDataTableModule,
    CovalentDialogsModule,
    MdAutocompleteModule,
    MdIconModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdInputModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdDialogModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdListModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTooltipModule,
    MdProgressSpinnerModule,
    MdButtonToggleModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    RoutingModule,
    Md2DatepickerModule,
    MdGridListModule
  ],
  exports: [
    BrowserModule,
    //TarefaViewComponent
  ],
  entryComponents: [
    ConcluirConfirmComponent,
    ImpedirConfirmComponent,
    IniciarConfirmComponent,
    ExcluirConfirmComponent,
    InvalidarConfirmComponent    
  ],
  providers: [
    appRoutingProviders,
    TdLayoutComponent,
    TdDialogService,
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Module {
  
}
