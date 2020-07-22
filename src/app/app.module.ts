import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TipoProdutoComponent } from './tipo-produto/tipo-produto.component';
import { InstanciaProdutoComponent } from './instancia-produto/instancia-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoProdutoComponent,
    InstanciaProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
