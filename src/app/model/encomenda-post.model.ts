import { ItemProduto } from "./itemProduto.model";

export class EncomendaPost {
    constructor(
        public utilizador_email: String,
        public encomenda_produtos: ItemProduto[]){}

}