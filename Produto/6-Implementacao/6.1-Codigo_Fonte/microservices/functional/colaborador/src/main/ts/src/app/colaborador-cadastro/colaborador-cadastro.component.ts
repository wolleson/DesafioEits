import { Component, OnInit } from '@angular/core';
import {Broker} from "eits-ng2";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { TdFileService, IUploadOptions, TdDialogService } from '@covalent/core';

// (optional) Additional Covalent Modules imports

@Component({
  selector: 'app-colaborador-cadastro',
  templateUrl: './colaborador-cadastro.component.html',
  styleUrls: ['./colaborador-cadastro.component.css']
})



export class ColaboradorCadastroComponent implements OnInit, ErrorStateMatcher {
   
  colaborador: any = {};
 arquivo: any;
 colaboradorForm: FormControl;
 form: FormGroupDirective;
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


  constructor(public router: Router, public activatedRouter: ActivatedRoute, fb: FormBuilder, private _dialogService: TdDialogService)
   { 
    this.findColaboradorById();   
    }

    
    ngOnInit() {
    }
  
  

// salva colaborador
  public insertColaborador(colaborador): void
   {
    Broker.of("colaboradorService").promise("insertColaborador", colaborador)
            .then((colaborador) => {
             this.openAlert();
           
            })
            .catch((message) =>this.openAlertFail());
    }



// busca colaborador pelo id
    findColaboradorById(): void
    {
      this.activatedRouter.params.subscribe(params => 
        {
            let id = params['id'];
            {
              Broker.of("colaboradorService").promise("findColaboradorById", id)
                .then((result) => {
                       this.colaborador = result;
                          })
                          .catch((message) =>console.log());
                  } 
        });
    }




    // metodo para capturar campo vazio
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean 
    {
      // Error when invalid control is dirty, touched, or submitted
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  
    
    // confirmar
    openAlert(): void {
      this._dialogService.openAlert({
        message: 'Colaborador salvo com sucesso!',
        closeButton: 'Ok',
      });
      this.router.navigate([""]);
    }

    openAlertFail(): void {
      this._dialogService.openAlert({
        message: 'Falha ao salvar, verefique se todos os campos obrigatórios foram preenchidos!',
        closeButton: 'Ok',
      });
    }
}
 

  
  

