import { Component, OnInit } from '@angular/core';
import { perguntasFrequentes } from '../shared/perguntas-frequentes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  perguntas = perguntasFrequentes;

  ngOnInit(): void {

  }

  

}
