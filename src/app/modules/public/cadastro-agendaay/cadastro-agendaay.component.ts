import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroAgendaayService } from './services/cadastro-agendaay.service';

@Component({
  selector: 'app-cadastro-agendaay',
  templateUrl: './cadastro-agendaay.component.html',
  styleUrls: ['./cadastro-agendaay.component.scss']
})
export class CadastroAgendaayComponent {
  sent: boolean = false;
  sending: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cadastroAgendaayService: CadastroAgendaayService
    ) {}

  formListaEspera: FormGroup = this.fb.group({
    ID: [],
    nomeEstabelecimento: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  addEstablishment() {
    this.sending = true;
    if (this.formListaEspera.valid) {
      this.cadastroAgendaayService.addEstablishment(this.formListaEspera.value).subscribe(
        (next) => {
          this.sent = true;
          this.sending = false;
        } 
      )
    }
  }

}
