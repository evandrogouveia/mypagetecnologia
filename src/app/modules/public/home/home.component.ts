import { Component, OnInit } from '@angular/core';
import { perguntasFrequentes } from '../shared/perguntas-frequentes';
import { base64Image } from '../shared/image-base64';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicService } from '../services/public.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  perguntas = perguntasFrequentes;
  dataImage = base64Image;
  loading = false;
  enviadoSucesso = false;
  erroEnvio = false;
  mensagem = '';
  submitted = false;

  formOrcamento: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['']
  });

  constructor( 
    private fb: FormBuilder,
    private publicService: PublicService
  ) {

  }

  ngOnInit(): void {

  }

  sendOrcamento(){
    this.loading = true;
    this.submitted = true;
    if (this.formOrcamento.valid) {
      this.publicService.newOrcamento(this.formOrcamento.value).subscribe(res => {
        this.loading = false;
        this.enviadoSucesso = true;
        this.erroEnvio = false;
        this.submitted = false;
        this.mensagem = 'Dados enviados com sucesso! Entraremos em contato o mais breve possível.';
        this.formOrcamento.reset();
      }, (err) => {
        this.erroEnvio = true;
        this.submitted = false;
        this.mensagem = 'Ocorreu um erro no envio do dados, tente novamente mais tarde.';
      });
    } else {
      this.loading = false;
      this.erroEnvio = true;
      this.mensagem = 'Preencha os campos obrigatórios';
    }
   
  }
  

}
