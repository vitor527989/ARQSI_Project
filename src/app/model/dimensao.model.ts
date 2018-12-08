import { Medida } from './medida.model';

export class Dimensao {
    constructor(
        public id: Number,
        public comprimento: Medida,
        public largura: Medida,
        public altura: Medida){}
}