import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Broker} from "eits-ng2";

@Component({
  selector: 'app-certificado-cadastro',
  templateUrl: './certificado-cadastro.component.html',
  styleUrls: ['./certificado-cadastro.component.css']
})
export class CertificadoCadastroComponent implements OnInit {
colaborador: any;
certificado: any = {};

  constructor(public router: Router, public activatedRouter: ActivatedRoute) {
    activatedRouter.params.subscribe(params => 
      {
        let id = params['id'];

        Broker.of("colaboradorService").promise("findCertificadoById",  id)
        .then((result) => {
               this.certificado = result;
              
                  })
                  .catch((message) =>console.log(message));
      });
   }
  ngOnInit() {
  }
  public insertCertificado(certificado): void {
 
  console.log(certificado);
      Broker.of("colaboradorService").promise("insertCertificado", certificado)

            .then((certificado) => {
            console.log("Foi");
            })
            .catch((message) =>console.log(message));
    }
}
