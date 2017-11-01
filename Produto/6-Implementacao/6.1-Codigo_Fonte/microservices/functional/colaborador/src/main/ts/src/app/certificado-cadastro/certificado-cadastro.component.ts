import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Broker} from "eits-ng2";
import { TdFileService, IUploadOptions, TdDialogService } from '@covalent/core';

@Component({
  selector: 'app-certificado-cadastro',
  templateUrl: './certificado-cadastro.component.html',
  styleUrls: ['./certificado-cadastro.component.css']
})
export class CertificadoCadastroComponent implements OnInit {
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
      this.certificado.colaboradorId = this.colaborador;
      Broker.of("colaboradorService").promise("insertCertificado", this.certificado)
            .then((certificado) => {
              this.openAlert();
            })
            .catch((message) =>console.log(message));
      
    }

    // confirmar
    openAlert(): void {
      this._dialogService.openAlert({
        message: 'Certificado salvo com sucesso!',
        closeButton: 'Ok',
      });
      this.router.navigate([""]);
    }


  
}
