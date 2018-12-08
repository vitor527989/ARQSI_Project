import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './view/catalogo/catalogo.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { ComponenteComponent } from './view/componente/componente.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { EncomendaComponent } from './view/encomenda/encomenda.component';
import { EditarProdutoComponent } from './view/editar-produto/editar-produto.component';
import { CriarEncomendaComponent } from './view/criar-encomenda/criar-encomenda.component';
import { CriarProdutoComponent } from './view/criar-produto/criar-produto.component';
import { CriarItemProdutoComponent } from './view/criar-item-produto/criar-item-produto.component';
import { TrataFilhosComponent } from './view/trata-filhos/trata-filhos.component';
import { ListarItemProdComponent } from './view/listar-item-prod/listar-item-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    ProdutoComponent,
    ComponenteComponent,
    SobreComponent,
    EncomendaComponent,
    EditarProdutoComponent,
    CriarProdutoComponent,
    CriarEncomendaComponent,
    CriarItemProdutoComponent,
    TrataFilhosComponent,
    ListarItemProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
