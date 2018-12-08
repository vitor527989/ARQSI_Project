import { Dimensao } from './dimensao.model';
import { Material } from './material.model';

export class Produto {
    constructor(
        public id: Number,
        public nome: String,
        public descricao: String,
        public preco: Number,
        public minPercentagem: Number,
        public maxPercentagem: Number,
        public materiais: Material[],
        public categoria: String,
        public produtoPaiId: Number,
        public categoriaId: Number,
        public categoria_pai: String,
        public dimensao: Dimensao,
        public prodPai: String,
        public aggObrigatoria : Number){}

}