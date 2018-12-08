import { Component, OnInit } from '@angular/core';
import { EncomendaService } from '../../service/encomenda.service'
import { Encomenda } from 'src/app/model/encomenda.model';

@Component({
  selector: 'app-encomenda',
  templateUrl: './encomenda.component.html',
  styleUrls: ['./encomenda.component.css']
})
export class EncomendaComponent implements OnInit {

  encomendas: Encomenda[] = [];
  encomendaEscolhida: Encomenda;

  constructor(private encService: EncomendaService) { }

  ngOnInit() {
    this.getEncomendas();
  }

  getEncomendas(): void {
    this.encService.getEncomendas()
    .subscribe(enc => {
      this.encomendas = enc;
    });
  }

  escolherEncomenda(encomendaEsc): void {
    this.encomendaEscolhida = encomendaEsc;
  }

}
