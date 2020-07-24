import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ListaInstanciaProdutoComponent } from './lista-produto/lista-instancia-produto/lista-instancia-produto.component'
import { ListaClasseProdutoComponent } from './lista-produto/lista-classe-produto/lista-classe-produto.component'
import { ProdutoService } from './produto.service'

@NgModule({
  declarations: [
    ListaProdutoComponent,
    ListaInstanciaProdutoComponent,
    ListaClasseProdutoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListaProdutoComponent
  ],
  providers:[
    ProdutoService
  ]
})
export class ListaModule { }
