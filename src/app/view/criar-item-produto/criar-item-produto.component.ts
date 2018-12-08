import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../service/produto.service';
import { ProdutoUserTransferService } from '../../service/prod-user-transfer.service';
import { Utilizador } from '../../model/utilizador.model';
import { Produto } from 'src/app/model/produto.model';
import { Material } from '../../model/material.model';
import { ItemProduto } from '../../model/itemProduto.model';
import { ItemProdTransferService } from '../../service/item-prod-transfer.service';

@Component({
  selector: 'app-criar-item-produto',
  templateUrl: './criar-item-produto.component.html',
  styleUrls: ['./criar-item-produto.component.css']
})
export class CriarItemProdutoComponent implements OnInit {

  prodSelec: Produto;
  userSelec: Utilizador;
  matSelect: Material[]=[];
  matIp: Material[]=[];
  ip: ItemProduto = {
    nome:"",desc:"",preco:0,materiais:this.matIp,comp:0,larg:0,alt:0,categoria:"",categoria_pai:"",nomeProdPai:""
  };
  comprimento: Number;
  largura: Number;
  altura: Number;

  constructor(private putService: ProdutoUserTransferService,
    private iptService: ItemProdTransferService) { }

  ngOnInit() {
    this.prodSelec = this.putService.prodEscolhido;
    this.userSelec = this.putService.userEscolhido;
    this.matSelect = this.putService.matEscolhido;
    this.inicializar();
  }

  inicializar(): void {
    this.ip.nome = this.prodSelec.nome;
    this.ip.desc = this.prodSelec.descricao;
    this.ip.preco = this.prodSelec.preco;
    this.ip.categoria = this.prodSelec.categoria;
    this.ip.categoria_pai = this.prodSelec.categoria_pai;
    this.ip.nomeProdPai = this.prodSelec.prodPai;
    if(this.prodSelec.dimensao.comprimento.min == -1){
      this.ip.comp = this.prodSelec.dimensao.comprimento.max;
      this.comprimento = this.prodSelec.dimensao.comprimento.max;
      this.setComp(this.prodSelec.dimensao.comprimento.max);
    }
    if(this.prodSelec.dimensao.largura.min == -1){
      this.ip.larg = this.prodSelec.dimensao.largura.max;
      this.largura = this.prodSelec.dimensao.largura.max;
      this.setLarg(this.prodSelec.dimensao.largura.max);
    }
    if(this.prodSelec.dimensao.altura.min == -1){
      this.ip.alt = this.prodSelec.dimensao.altura.max;
      this.altura = this.prodSelec.dimensao.altura.max;
      this.setAlt(this.prodSelec.dimensao.altura.max);
    }
  }

  setComp(comprimento: Number): void{
    if(this.prodSelec.dimensao.comprimento.min <= comprimento && this.prodSelec.dimensao.comprimento.max >= comprimento){
      this.ip.comp = comprimento;
    }
  }
  setLarg(largura: Number): void{
    if(this.prodSelec.dimensao.largura.min <= largura && this.prodSelec.dimensao.largura.max >= largura){
      this.ip.comp = largura;
    }
  }
  setAlt(altura: Number): void{
    if(this.prodSelec.dimensao.altura.min <= altura && this.prodSelec.dimensao.altura.max >= altura){
      this.ip.comp = altura;
    }
  }
    
  mSelect: Material[] = [];
  selectMaterial(mat: Material, event: Event): void {
    event.preventDefault();
    this.mSelect.push(mat);
  }

  transferItemProduto(): void {
    this.ip.materiais = this.mSelect;
    this.iptService.seleccionaItemProd(this.ip, this.prodSelec.id, this.userSelec);
  }

}
