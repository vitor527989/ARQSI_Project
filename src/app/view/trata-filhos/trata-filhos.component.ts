import { Component, OnInit } from '@angular/core';
import { ItemProduto } from '../../model/itemProduto.model';
import { ItemProdTransferService } from '../../service/item-prod-transfer.service';
import { Produto } from '../../model/produto.model';
import { ProdutoService } from '../../service/produto.service';
import { EncomendaService } from '../../service/encomenda.service';
import { EncomendaPost } from '../../model/encomenda-post.model';
import { Utilizador } from 'src/app/model/utilizador.model';

@Component({
  selector: 'app-trata-filhos',
  templateUrl: './trata-filhos.component.html',
  styleUrls: ['./trata-filhos.component.css']
})
export class TrataFilhosComponent implements OnInit {

  idProdOrig: Number;
  ip: ItemProduto;
  filhos: Produto[] = [];
  filhosIp: ItemProduto[] = [];
  prodsEncomenda: ItemProduto[] = [];
  user: Utilizador;
  enc: EncomendaPost = {
    utilizador_email: null, encomenda_produtos: null
  };

  constructor(private iptService: ItemProdTransferService,
    private prodService: ProdutoService,
    private encService: EncomendaService) { }

  ngOnInit() {
    this.idProdOrig = this.iptService.idProdOriginal;
    this.ip = this.iptService.ip;
    this.prodsEncomenda.push(this.ip);
    this.user = this.iptService.utilizador;
    this.getFilhos();
    this.criarItemProdFilhos();
  }

  getFilhos(): void {
    this.prodService.getFilhos(this.idProdOrig).subscribe(f => 
      {this.filhos = f});
  }

  criarItemProdFilhos(): void {
    this.filhos.forEach(filho => {
      var f = new ItemProduto(filho.nome,filho.descricao,
        filho.preco,filho.materiais,filho.categoria,
        filho.categoria_pai,0,0,0,filho.prodPai);
        if(filho.dimensao.comprimento.min == -1){
          f.comp=filho.dimensao.comprimento.max;
        }
        if(filho.dimensao.largura.min == -1){
          f.larg=filho.dimensao.largura.max;
        }
        if(filho.dimensao.altura.min == -1){
          f.alt=filho.dimensao.altura.max;
        }
      this.filhosIp.push(f);
    });
  }

  setDimensoes(c:Number, l:Number, a:Number, ip: ItemProduto): void{
    if(c){
      ip.comp = c;
    }
    if(l){
      ip.larg = l;
    }
    if(a){
      ip.alt = a;
    }
    this.prodsEncomenda.push(ip);
  }

  postEncomenda(): void{
    this.enc.utilizador_email = this.user.email;
    this.enc.encomenda_produtos = this.prodsEncomenda;
    this.encService.insertEncomenda(this.enc).subscribe();
  }

}
