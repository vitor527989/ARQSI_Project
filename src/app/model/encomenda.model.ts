import { Utilizador } from './utilizador.model';
import { ItemProduto } from './itemProduto.model';

export class Encomenda {
  constructor(
    public _id: string,
    public encomenda_user: [Utilizador],
    public encomenda_data: {Date},
    public encomenda_produtos: [ItemProduto]) {}
}