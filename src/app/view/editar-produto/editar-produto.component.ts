import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../service/produto.service';
import { ProdutoTransferService } from '../../service/produto-transfer.service';
import { Produto } from 'src/app/model/produto.model';
import { ProdutoPost } from 'src/app/model/produtoPost.model';
import { Dimensao } from 'src/app/model/dimensao.model';
import { Medida } from 'src/app/model/medida.model';
import { DimensaoPost } from 'src/app/model/dimensaoPost.model';
import { ProdutoUserTransferService } from 'src/app/service/prod-user-transfer.service';
import { Material } from 'src/app/model/material.model';
import { ProdutoMaterial } from 'src/app/model/produtoMaterial.model';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  idProdutoMaterial: Number;
  produtoMaterial: ProdutoMaterial = { idProduto: -1, idMaterial: -1};
  produtosMateriais: ProdutoMaterial[] = [];
  materiaisProd: Material[] = [];
  materiais: Material[] = [];
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
  novoCompMin: Number;
  novoCompMax: Number;
  novaLargMin: Number;
  novaLargMax: Number;
  novaAltMin: Number;
  novaAltMax: Number;
  medidaAux1: Medida;
  constructor(private prodService: ProdutoService,
      private ptServ: ProdutoTransferService,
      private puServ: ProdutoUserTransferService) { }

  ngOnInit() {
    this.produto = this.ptServ.escolhido;
    this.materiaisProd = this.puServ.matEscolhido;
    this.getMateriais();
    this.getProdutosMateriais();
  }
  eliminarProdutoMaterial(idMaterial: Number): void{
    this.produtosMateriais.forEach(element => {
      if(element.idMaterial == idMaterial && element.idProduto == this.produto.id){
        this.idProdutoMaterial = element.id;
      }
    });
    this.prodService.eliminarProdutoMaterial(this.idProdutoMaterial).subscribe();
  }
  postProdutoMaterial(idMaterial: Number): void{
    this.produtoMaterial.idProduto = this.produto.id;
    this.produtoMaterial.idMaterial = idMaterial;
    this.prodService.postProdutoMaterial(this.produtoMaterial).subscribe();
  }
  getProdutosMateriais(): void{
    this.prodService.getProdutosMateriais().subscribe(
      pm => {
        this.produtosMateriais = pm;
      }  
    );
  }
  getMateriais(): void{
    this.prodService.getMateriais().subscribe(
      enc => {
        this.materiais = enc;
      });
  }
  
  add(produtoPost: ProdutoPost): void{
    this.prodService.updateProduto(produtoPost).subscribe(
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
                this.add(this.produtoPost)}
             );}
        )}
      )}
    );
  }
  //addDimensao(dimensao: Dimensao): void{
  //  this.prodService.createNovaDimensao(dimensao).subscribe(
  //    () =>  {},
  //    () => {},
  //    () => {}
  //  );
  //}



  setNome(novoNome: String){
    this.produto.nome = novoNome;
    this.produtoPost.id = this.produto.id;
    this.produtoPost.categoriaId = this.produto.categoriaId;
    this.produtoPost.produtoPaiId = this.produto.produtoPaiId;
    this.produtoPost.preco = this.produto.preco;
    //this.produtoPost.idDimensao = this.produto.dimensao.id;
    this.produtoPost.nome = novoNome;

  }

  setDescricao(novaDescricao: String){
    this.produto.descricao = novaDescricao;
    this.produtoPost.descricao = novaDescricao;
  }

  setCompMin(novoCompMin: Number){
    this.produto.dimensao.comprimento.min = novoCompMin;
    this.comprimento.min = novoCompMin;
  }

  setCompMax(novoCompMax: Number){
    this.produto.dimensao.comprimento.max = novoCompMax;
    this.comprimento.max = novoCompMax;
  }

  setLargMin(novaLargMin: Number){
    this.produto.dimensao.largura.min = novaLargMin;
    this.dimensao.largura.min = novaLargMin;
  }

  setLargMax(novaLargMax: Number){
    this.produto.dimensao.largura.max = novaLargMax;
    this.dimensao.largura.max = novaLargMax;
  }

  setAltMin(novaAltMin: Number){
    this.produto.dimensao.altura.min = novaAltMin;
    this.dimensao.altura.min = novaAltMin;
  }

  setAltMax(novaAltMax: Number){
    this.produto.dimensao.altura.max = novaAltMax;
    this.dimensao.altura.max = novaAltMax;
  }
}
