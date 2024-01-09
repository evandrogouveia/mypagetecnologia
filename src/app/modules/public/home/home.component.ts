import { Component, OnInit } from '@angular/core';
import { perguntasFrequentes } from '../shared/perguntas-frequentes';
import { base64Image } from '../shared/image-base64';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  perguntas = perguntasFrequentes;
  dataImage = base64Image;

  ngOnInit(): void {

  }
  

}
