import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAgendaayComponent } from './cadastro-agendaay.component';

const routes: Routes = [
  {
    path: '', component: CadastroAgendaayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroAgendaayRoutingModule { }
