import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Broker} from "eits-ng2";
import { TdFileService, IUploadOptions, TdDialogService } from '@covalent/core';

@Component({
  selector: 'app-certificado-editar',
  templateUrl: './certificado-editar.component.html',
  styleUrls: ['./certificado-editar.component.css']
})
export class CertificadoEditarComponent implements OnInit {

certificado: any = {};
idColaborador;


// busca o certificado
    constructor(public router: Router, public activatedRouter: ActivatedRoute,  private _dialogService: TdDialogService) {
      this.activatedRouter.params.subscribe(params => 
        {
            let id = params['id'];
            {
              Broker.of("colaboradorService").promise("findCertificadoById", id)
                .then((result) => {
                  console.log(result)
                       this.certificado =  result;
                       this.idColaborador = this.certificado.colaboradorId.id;
                       console.log(this.idColaborador);

                          })
                          .catch((message) =>console.log(message));
                  } 
        });
     }
    
     ngOnInit() 
     {
     }
  
  

     // metodo para salvar certificado editado
    public insertCertificado(): void {
        Broker.of("colaboradorService").promise("insertCertificado", this.certificado)
              .then((certificado) => {
                this.openAlert();
              })
              .catch((message) =>console.log(message));
        
      }    // confirmar
      openAlert(): void {
        this._dialogService.openAlert({
          message: 'Certificado salvo com sucesso!',
          closeButton: 'Ok',
        });
        this.router.navigate([""]);
      }

      
      
  }
  