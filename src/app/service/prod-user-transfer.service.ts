import { Injectable } from '@angular/core';
import { Produto } from '../model/produto.model';
import { Utilizador } from '../model/utilizador.model';
import { Material } from '../model/material.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoUserTransferService {

    prodEscolhido: Produto;
    userEscolhido: Utilizador;
    matEscolhido: Material[] = [];

    constructor() { }

    seleccionaProdUser(p: Produto, u: Utilizador, m: Material[]): void {
        this.prodEscolhido = p;
        this.userEscolhido = u;
        this.matEscolhido = m;
    }
}
