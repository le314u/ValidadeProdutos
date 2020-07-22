import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TipoProdutoComponent } from './tipo-produto/tipo-produto.component';
import { InstanciaProdutoComponent } from './instancia-produto/instancia-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ClasseProdutoComponent } from './lista-produto/classe-produto/classe-produto.component';
import { ProdutoComponent } from './lista-produto/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoProdutoComponent,
    InstanciaProdutoComponent,
    ListaProdutoComponent,
    ClasseProdutoComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
