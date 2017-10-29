import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradorCadastroComponent } from './colaborador-cadastro/colaborador-cadastro.component';
import { ListaColaboradorComponent } from './lista-colaborador/lista-colaborador.component';
import { DetalhesColaboradorComponent } from './detalhes-colaborador/detalhes-colaborador.component';
import { CertificadoCadastroComponent } from './certificado-cadastro/certificado-cadastro.component';
import { DetalhesCertificadoComponent } from './detalhes-certificado/detalhes-certificado.component';



const routes: Routes = [
    { path: 'cadastro-colaborador', component: ColaboradorCadastroComponent }, 
    { path: 'editar-colaborador/:id', component: ColaboradorCadastroComponent }, 
    { path: 'detalhe-colaborador/:id', component:  DetalhesColaboradorComponent}, 
    { path: 'cadastro-certificado/:id', component: CertificadoCadastroComponent}, 
    { path: 'editar-certificado/:id', component: CertificadoCadastroComponent}, 
  
    { path: '', component: ListaColaboradorComponent },]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

/**
 *
 */

@NgModule({
    imports: [ routing ],
    exports: [ RouterModule ]
})
export class RoutingModule
{

}

export const appRoutingProviders: any[] = [];