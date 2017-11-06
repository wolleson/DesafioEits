import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Broker} from "eits-ng2";
import { TdFileService, IUploadOptions, TdDialogService } from '@covalent/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-certificado-cadastro',
  templateUrl: './certificado-cadastro.component.html',
  styleUrls: ['./certificado-cadastro.component.css']
})
export class CertificadoCadastroComponent implements OnInit, ErrorStateMatcher {
colaborador: any;
certificado: any = {};
idColaborador;





  constructor(public router: Router, public activatedRouter: ActivatedRoute,  private _dialogService: TdDialogService)
  {
    this.activatedRouter.params.subscribe(params => 
      {
          let id = params['id'];
          {
            Broker.of("colaboradorService").promise("findColaboradorById", id)
              .then((result) => {
                console.log(result)
                     this.colaborador =  result;
                     this.idColaborador = this.colaborador.id;
                        })
                        .catch((message) =>console.log(message));
                } 
      });
   }
  


   ngOnInit() 
   {
   }


   // salva certificado
  public insertCertificado(): void 
  {
    console.log("HAHAHAHAHAHA")
      this.certificado.colaboradorId = this.colaborador;
      Broker.of("colaboradorService").promise("insertCertificado", this.certificado)
            .then((certificado) => {
              this.openAlert();
            })
            .catch((message) =>this.openAlertFail());
    }

    // confirmar
    openAlert(): void {
      this._dialogService.openAlert({
        message: 'Certificado salvo com sucesso!',
        closeButton: 'Ok',
      });
      this.router.navigate(['/detalhe-colaborador',this.idColaborador]);
    }


    // metodo para capturar campo vazio
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean 
    {
      // Error when invalid control is dirty, touched, or submitted
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }

    openAlertFail(): void {
      this._dialogService.openAlert({
        message: 'Falha ao salvar, verefique se todos os campos obrigatórios foram preenchidos!',
        closeButton: 'Ok',
      });
    }
  
  
}
