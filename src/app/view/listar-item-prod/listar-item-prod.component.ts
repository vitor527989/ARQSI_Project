import { Component, OnInit } from '@angular/core';
import { EncomendaService } from '../../service/encomenda.service'
import { ItemProduto } from 'src/app/model/itemProduto.model';
import { Material } from 'src/app/model/material.model';
import { Acabamento } from 'src/app/model/acabamento.model';

@Component({
  selector: 'app-listar-item-prod',
  templateUrl: './listar-item-prod.component.html',
  styleUrls: ['./listar-item-prod.component.css']
})
export class ListarItemProdComponent implements OnInit {

  itensProduto: ItemProduto[] = [];
  materiais: Material[] = [];

  constructor(private encService: EncomendaService) { }

  ngOnInit() {
    this.getItensProduto();
  }

  getItensProduto(): void{
    this.encService.getEncomendas()
    .subscribe(encs => {
      encs.forEach(enc => {
        enc.encomenda_produtos.forEach(ip => {
          this.itensProduto.push(ip);
          this.materiais = ip.materiais;
        });
      });
      console.log(this.materiais);
    });
  }

}
