import { Component, Inject } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  menus: Object[] = [{
    icon: 'home',
    route: './tarefa',
    title: 'Início',
  },
  {
    icon: 'add_circle',
    route: './tarefa/cadastro',
    title: 'Criar Nova Tarefa',
  }
  ];
  usermenu: Object[] = [{
    icon: 'exit_to_app',
    route: '.',
    title: 'Sair da conta',
  }
  ];

}
