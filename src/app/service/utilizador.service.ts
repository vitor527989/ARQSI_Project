import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Utilizador } from '../model/utilizador.model';


@Injectable({
  providedIn: 'root'
})
export class UtilizadorService {

  private uriAzure: string = 'http://sic-api.azurewebsites.net/api/Utilizador/';

  constructor(private http: HttpClient) { }

  getUtilizadores (): Observable<Utilizador[]> {
    return this.http.get<Utilizador[]>(this.uriAzure);
  }

  getUtilizador(id: Number): Observable<Utilizador> {
    return this.http.get<Utilizador>(this.uriAzure + id);
  }

  insertUtilizador(Utilizador: Utilizador): Observable<Utilizador> {
    return this.http.post<Utilizador>(this.uriAzure, Utilizador);
  }

  updateUtilizador(Utilizador: Utilizador): Observable<void> {
    return this.http.put<void>(this.uriAzure, Utilizador);
  }

  deleteUtilizador(id: Number): Observable<Utilizador>{
    return this.http.delete<Utilizador>(this.uriAzure + id);
  }
}