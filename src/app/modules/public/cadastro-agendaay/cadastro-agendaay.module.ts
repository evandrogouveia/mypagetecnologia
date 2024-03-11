import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroAgendaayRoutingModule } from './cadastro-agendaay-routing.module';
import { CadastroAgendaayComponent } from './cadastro-agendaay.component';
import { NgxBootstrapModule } from 'src/app/ngx-bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CadastroAgendaayComponent],
  imports: [
    CommonModule,
    CadastroAgendaayRoutingModule,
    NgxBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastroAgendaayModule { }
