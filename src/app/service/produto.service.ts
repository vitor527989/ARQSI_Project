import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Produto } from '../model/produto.model';
import { ProdutoPost } from '../model/produtoPost.model';
import { Medida } from '../model/medida.model';
import { DimensaoPost } from '../model/dimensaoPost.model';
import { Material } from '../model/material.model';
import { ProdutoMaterial } from '../model/produtoMaterial.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private uriAzure: string = 'http://sic-api.azurewebsites.net/api/';

  constructor(private http: HttpClient) { }

  getProdutos (): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.uriAzure + "Produto/");
  }

  getProduto(id: Number): Observable<Produto> {
    return this.http.get<Produto>(this.uriAzure + "Produto/" + id);
  }

  insertProduto(ProdutoPost: ProdutoPost): Observable<ProdutoPost> {
    return this.http.post<ProdutoPost>(this.uriAzure + "Produto/", ProdutoPost);
  }

  updateProduto(ProdutoPost: ProdutoPost): Observable<void> {
    return this.http.put<void>(this.uriAzure + "Produto/" + ProdutoPost.id, ProdutoPost);
  }

  deleteProduto(id: Number): Observable<Produto>{
    return this.http.delete<Produto>(this.uriAzure + "Produto/" + id);
  }

  getFilhos(id: Number): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.uriAzure + "Produto/" + id + "/Partes/");
  }

  getMateriais(): Observable<Material[]>{
    return this.http.get<Material[]>(this.uriAzure + "Material/");
  }

  postProdutoMaterial(produtoMaterial: ProdutoMaterial): Observable<ProdutoMaterial>{
    return this.http.post<ProdutoMaterial>(this.uriAzure + "ProdutoMaterial/",produtoMaterial);
  }

  getProdutosMateriais(): Observable<ProdutoMaterial[]>{
    return this.http.get<ProdutoMaterial[]>(this.uriAzure + "ProdutoMaterial/");
  }

  eliminarProdutoMaterial(id: Number): Observable<ProdutoMaterial>{
    return this.http.delete<ProdutoMaterial>(this.uriAzure + "ProdutoMaterial/" + id);
  }

  createNovaDimensao(dimensaoPost : DimensaoPost): Observable<DimensaoPost> {
    return this.http.post<DimensaoPost>(this.uriAzure + "Dimensao/", dimensaoPost);
  }

  createNovaMedida(medida : Medida): Observable<Medida> {
    return this.http.post<Medida>(this.uriAzure + "Medida/", medida);
  }
}