import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TipoProdutoComponent } from './tipo-produto/tipo-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
