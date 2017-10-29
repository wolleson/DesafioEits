import { Component, OnInit } from '@angular/core';
import {Broker} from "eits-ng2";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';


// (optional) Additional Covalent Modules imports

@Component({
  selector: 'app-colaborador-cadastro',
  templateUrl: './colaborador-cadastro.component.html',
  styleUrls: ['./colaborador-cadastro.component.css']
})



export class ColaboradorCadastroComponent implements OnInit, ErrorStateMatcher {
   
  colaborador: any = {};
  colaboradorForm: FormGroup;
  
  constructor(public router: Router, public activatedRouter: ActivatedRoute, fb: FormBuilder) { 


    this.findColaboradorById();    
    }


    
      isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        // Error when invalid control is dirty, touched, or submitted
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
      }
    
    
  ngOnInit() {
  }

  public insertColaborador(colaborador, control: FormControl | null, form: FormGroupDirective | NgForm | null): void {

      Broker.of("colaboradorService").promise("insertColaborador", colaborador)

            .then((colaborador) => {
            console.log("Foi");
            })
            .catch((message) =>console.log(message));
    }

    
    findColaboradorById(): void{
      this.activatedRouter.params.subscribe(params => 
        {
            let id = params['id'];
            {
              Broker.of("colaboradorService").promise("findColaboradorById", id)
                .then((result) => {
                       this.colaborador = result;
                          })
                          .catch((message) =>console.log(message));
                  } 
        });


    }



}
 

  
  

