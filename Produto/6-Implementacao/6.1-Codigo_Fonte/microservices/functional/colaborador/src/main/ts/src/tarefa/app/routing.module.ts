import { TarefaDetailsHistoricoComponent } from './views/tarefa/tarefa-details-historico/tarefa-details-historico.component';
import { TarefaDetailsComponent } from './views/tarefa/tarefa-details/tarefa-details.component';
import { TarefaFormComponent } from './views/tarefa/tarefa-form/tarefa-form.component';
import { TarefaListComponent } from './views/tarefa/tarefa-list/tarefa-list.component';
import { AppComponent } from './app.component';
import { TarefaViewComponent } from './views/tarefa/tarefa-view.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'tarefa', pathMatch: 'full'},
    { path: 'tarefa', component: TarefaViewComponent,
        children: 
        [
         { path: '', component: TarefaListComponent },
         { path: 'editar/:id', component: TarefaFormComponent },
         { path: 'cadastro', component: TarefaFormComponent },
         { path: 'detalhes/:id', component: TarefaDetailsComponent },
         { path: 'historicos/:id', component: TarefaDetailsHistoricoComponent }
        ]},

	// { path: '**', redirectTo: 'tarefa' }
];

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
