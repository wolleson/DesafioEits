import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { DetalhesColaboradorComponent } from './../detalhes-colaborador/detalhes-colaborador.component';
import {Broker} from "eits-ng2";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalhes-certificado',
  templateUrl: './detalhes-certificado.component.html',
  styleUrls: ['./detalhes-certificado.component.css']
})
export class DetalhesCertificadoComponent implements OnInit {
 
 certificado: any;
  ngOnInit(): void {
  
  }

  onNoClick(){
    this.dialogRef.close("fecha"); 
  }


// contrutor recebe id pelo router, busca o certificado pelo id

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public dialogRef: MatDialogRef<DetalhesCertificadoComponent>,
  @Inject(MAT_DIALOG_DATA) public data : any) 
  {
            Broker.of("colaboradorService").promise("findCertificadoById", data.id)
              .then((result) => {
                     this.certificado = result;
                        })
                        .catch((message) =>console.log(message)); 
                      }
}
