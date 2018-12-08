import { Acabamento } from './acabamento.model';

export class Material {
    constructor(
        public nome: String,
        public acabamentos: Acabamento[],
        public id?: Number){}
}