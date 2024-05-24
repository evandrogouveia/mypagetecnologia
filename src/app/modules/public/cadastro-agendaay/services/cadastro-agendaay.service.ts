import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroAgendaayService {

  constructor(private http: HttpClient) { }

  addEstablishment(data: any): Observable<any> {
    return this.http.post<any>(`https://mypagetecnologia.com.br/api/cadastro-estabelecimento`, data);
  }
}
