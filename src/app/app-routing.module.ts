import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncomendaComponent } from './view/encomenda/encomenda.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { CatalogoComponent } from './view/catalogo/catalogo.component';
import { ProdutoComponent } from './view/produto/produto.component';
import { EditarProdutoComponent } from './view/editar-produto/editar-produto.component';
import { CriarEncomendaComponent } from './view/criar-encomenda/criar-encomenda.component';
import { CriarProdutoComponent } from './view/criar-produto/criar-produto.component';
import { CriarItemProdutoComponent } from './view/criar-item-produto/criar-item-produto.component';
import { TrataFilhosComponent } from './view/trata-filhos/trata-filhos.component';
import { ListarItemProdComponent } from './view/listar-item-prod/listar-item-prod.component';

const routes: Routes = [
  { path: 'encomenda', component: EncomendaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'criar-encomenda', component: CriarEncomendaComponent },
  { path: 'editar-produto', component: EditarProdutoComponent },
  { path: 'criar-produto', component: CriarProdutoComponent},
  { path: 'produto', component: ProdutoComponent },
  { path: 'criar-item-produto', component: CriarItemProdutoComponent },
  { path: 'trata-filhos', component: TrataFilhosComponent },
  { path: 'listar-item-prod', component: ListarItemProdComponent },
  { path: '', redirectTo: '/encomenda', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
