import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Encomenda } from '../model/encomenda.model';
import { ItemProduto } from '../model/itemProduto.model';
import { EncomendaPost } from '../model/encomenda-post.model';


@Injectable({
  providedIn: 'root'
})
export class EncomendaService {

  private uriHeroku: string = 'https://sicencomendas-vitor-telmo.herokuapp.com/api/Encomenda/';

  constructor(private http: HttpClient) { }

  getEncomendas(): Observable<Encomenda[]> {
    return this.http.get<Encomenda[]>(this.uriHeroku);
  }

  getEncomenda(id: string): Observable<Encomenda> {
    return this.http.get<Encomenda>(this.uriHeroku + id);
  }

  insertEncomenda(encomenda: EncomendaPost): Observable<EncomendaPost> {
    return this.http.post<EncomendaPost>(this.uriHeroku, encomenda);
  }

  updateEncomenda(encomenda: Encomenda): Observable<void> {
    return this.http.put<void>(this.uriHeroku, encomenda);
  }

  deleteEncomenda(id: string) {
    return this.http.delete(this.uriHeroku + id);
  }

  getItensEncomenda(id: string): Observable<ItemProduto[]> {
    return this.http.get<ItemProduto[]>(this.uriHeroku + id + '/Itens');
  }
}
