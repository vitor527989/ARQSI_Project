export class ProdutoPost{
    constructor(
        public nome: String,
        public descricao: String,
        public idDimensao: Number,
        public preco: Number,
        public categoriaId: Number,
        public produtoPaiId?: Number,
        public id?: Number,
    ){}
}