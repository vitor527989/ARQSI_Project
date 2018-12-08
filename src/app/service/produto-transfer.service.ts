import { Injectable } from '@angular/core';
import { Produto } from '../model/produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoTransferService {

    escolhido: Produto;

    constructor() { }

    seleccionaProd(p: Produto): void {
      this.escolhido = p;
    }
}
