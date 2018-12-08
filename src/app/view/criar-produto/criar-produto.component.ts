import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto.model';
import { Medida } from 'src/app/model/medida.model';
import { DimensaoPost } from 'src/app/model/dimensaoPost.model';
import { Dimensao } from 'src/app/model/dimensao.model';
import { ProdutoPost } from 'src/app/model/produtoPost.model';
import { ProdutoService } from 'src/app/service/produto.service';
import { Material } from 'src/app/model/material.model';
import { ProdutoMaterial } from 'src/app/model/produtoMaterial.model';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {
  idProdutoPost: Number;
  produtoMaterial: ProdutoMaterial = { idProduto: -1, idMaterial: -1};
  materiais: Material[] = [];
  idAux: Number = 1;
  produto: Produto;
  compTemp: Medida;
  largTemp: Medida;
  altTemp: Medida;
  dimensaoTemp: DimensaoPost;
  dimensaoPost: DimensaoPost = {
    comprimentoId: -1, larguraId: -1, alturaId: -1
  }
  comprimento: Medida = {
    min: -1, max: -1
  };
  largura: Medida= {
    min: -1, max: -1
  };
  altura: Medida= {
    min: -1, max: -1
  };
  dimensao: Dimensao = {
    id: -1, comprimento: this.comprimento , largura: this.largura, altura: this.altura
  }; 
  produtoPost: ProdutoPost = {
    nome:"", descricao: "",idDimensao: -1,preco: -1, categoriaId:-1,produtoPaiId: -1
  };
  novoNome: String;
  novaDescricao: String;
  novoPreco: Number;
  novoCompMin: Number;
  novoCompMax: Number;
  novaLargMin: Number;
  novaLargMax: Number;
  novaAltMin: Number;
  novaAltMax: Number;
  medidaAux1: Medida;


  constructor(private prodService: ProdutoService) { }

  ngOnInit() {
    this.getMateriais();
  }

  getMateriais(): void{
    this.prodService.getMateriais().subscribe(
      enc => {
        this.materiais = enc;
      });
  }

  postProdutoMaterial(idMaterial: Number): void{
    this.produtoMaterial.idProduto = this.idProdutoPost;
    this.produtoMaterial.idMaterial = idMaterial;
    this.prodService.postProdutoMaterial(this.produtoMaterial).subscribe();
  }
  add(produtoPost: ProdutoPost): void{
    this.prodService.insertProduto(produtoPost).subscribe(
      () =>  {},
      () => {},
      () => {}
    );
  }
  addComprimento(comprimento: Medida, largura: Medida, altura: Medida): void{
    this.prodService.createNovaMedida(comprimento).subscribe(
      (valor) => {this.compTemp = valor; this.prodService.createNovaMedida(largura).subscribe(
        (valor1) => {this.largTemp = valor1; this.prodService.createNovaMedida(altura).subscribe(
          (valor2) => {this.altTemp = valor2;this.dimensaoPost.comprimentoId = this.compTemp.id;
             this.dimensaoPost.larguraId = this.largTemp.id;
             this.dimensaoPost.alturaId = this.altTemp.id; 
             this.prodService.createNovaDimensao(this.dimensaoPost).subscribe(
               (valor3) => {this.dimensaoTemp = valor3; this.produtoPost.idDimensao = this.dimensaoTemp.id;
                this.prodService.insertProduto(this.produtoPost).subscribe((valor4) => {this.idProdutoPost = valor4.id})}
             );}
        )}
      )}
    );
  }

  setNome(novoNome: String){
    this.produtoPost.categoriaId = this.idAux;
    this.produtoPost.produtoPaiId = 1;
    //this.produtoPost.produtoPaiId = this.produto.produtoPaiId;
    //this.produtoPost.preco = this.produto.preco;
    //this.produtoPost.idDimensao = this.produto.dimensao.id;
    this.produtoPost.nome = novoNome;

  }

  setDescricao(novaDescricao: String){
    this.produtoPost.descricao = novaDescricao;
  }

  setPreco(novoPreco: Number){
    this.produtoPost.preco = novoPreco;
  }

  setCompMin(novoCompMin: Number){
    this.comprimento.min = novoCompMin;
  }

  setCompMax(novoCompMax: Number){
    this.comprimento.max = novoCompMax;
  }

  setLargMin(novaLargMin: Number){
    this.dimensao.largura.min = novaLargMin;
  }

  setLargMax(novaLargMax: Number){
    this.dimensao.largura.max = novaLargMax;
  }

  setAltMin(novaAltMin: Number){
    this.dimensao.altura.min = novaAltMin;
  }

  setAltMax(novaAltMax: Number){
    this.dimensao.altura.max = novaAltMax;
  }

}
