import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { 
        path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
      }
    ]
  },
  { 
    path: 'lista-de-espera', loadChildren: () => import('./cadastro-agendaay/cadastro-agendaay.module').then(m => m.CadastroAgendaayModule) 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
