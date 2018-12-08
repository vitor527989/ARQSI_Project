import { Component, OnInit } from '@angular/core';
import { UtilizadorService } from '../../service/utilizador.service';
import { ProdutoService } from '../../service/produto.service';
import { ProdutoUserTransferService } from '../../service/prod-user-transfer.service';
import { Utilizador } from '../../model/utilizador.model';
import { Produto } from 'src/app/model/produto.model';
import { Material } from '../../model/material.model';

@Component({
  selector: 'app-criar-encomenda',
  templateUrl: './criar-encomenda.component.html',
  styleUrls: ['./criar-encomenda.component.css']
})

export class CriarEncomendaComponent implements OnInit {

  utilizadores: Utilizador[] = [];
  produtos: Produto[] = [];
  prodSelec: Produto;
  matSelect: Material[] = [];
  userSelec: Utilizador;

  constructor(private usrService: UtilizadorService,
    private prodService: ProdutoService,
    private putService: ProdutoUserTransferService) { }

  ngOnInit() {
    this.getUtilizadores();
    this.getProdutos();
  }

  getUtilizadores(): void {
    this.usrService.getUtilizadores()
    .subscribe(usr => {
      this.utilizadores = usr;
    });
  }

  getProdutos(): void {
    this.prodService.getProdutos()
    .subscribe(enc => {
      this.produtos = enc;
    });
  }

  selecionaUtilizador(utilizador: Utilizador, event: Event): void {
    event.preventDefault();
    this.userSelec = utilizador;
  }

  selecionaProduto(produto: Produto, event: Event): void {
    event.preventDefault();
    this.prodSelec = produto;
    this.matSelect = produto.materiais;
  }

  transferProdUser(): void{
    this.putService.seleccionaProdUser(this.prodSelec, this.userSelec, this.matSelect);
  }

}
