import { Material } from './material.model';

export class ItemProduto {
    constructor(
        public nome: String,
        public desc: String,
        public preco: Number,
        public materiais: Material[],
        public categoria: String,
        public categoria_pai: String,
        public comp: Number,
        public larg: Number,
        public alt: Number,
        public nomeProdPai: String){}
}