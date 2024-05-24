import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

  newOrcamento(data: any): Observable<any>{
    return this.http.post<any>(`https://cesistemaslegislativo.com.br/api-mypage/orcamento`, data)
    .pipe(
      retry(1),
      catchError((error) => {return error})
    );
  }
}
