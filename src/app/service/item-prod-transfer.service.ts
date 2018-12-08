import { Injectable } from '@angular/core';
import { ItemProduto } from '../model/itemProduto.model';
import { Utilizador } from '../model/utilizador.model';


@Injectable({
  providedIn: 'root'
})
export class ItemProdTransferService {

    ip: ItemProduto;
    idProdOriginal: Number;
    utilizador: Utilizador;

    constructor() { }

    seleccionaItemProd(itpr: ItemProduto, id: Number, u: Utilizador): void {
      this.idProdOriginal = id;
      this.ip = itpr;
      this.utilizador = u;
    }
}