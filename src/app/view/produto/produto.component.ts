import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../service/produto.service';
import { ProdutoTransferService } from '../../service/produto-transfer.service';
import { Produto } from 'src/app/model/produto.model';
import { Material } from 'src/app/model/material.model';
import { ProdutoUserTransferService } from 'src/app/service/prod-user-transfer.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  produtoSel: Produto;
  matSel: Material[] = [];

  constructor(private prodService: ProdutoService,
      private ptServ: ProdutoTransferService,
      private puServ: ProdutoUserTransferService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(): void {
    this.prodService.getProdutos()
    .subscribe(enc => {
      this.produtos = enc;
    });
  }

  eliminarProduto(prod: Produto): void{
    this.prodService.deleteProduto(prod.id).subscribe(
      () =>  {},
      () => {},
      () => {window.location.reload()}
    );
  }

  escolherProduto(produtoEsc: Produto): void {
    this.ptServ.seleccionaProd(produtoEsc);
    this.produtoSel = produtoEsc;
    this.matSel = produtoEsc.materiais;
  }

  transferProdUser(): void{
    this.puServ.seleccionaProdUser(this.produtoSel, null, this.matSel);
  }

}
