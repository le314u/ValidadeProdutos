import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroClasseProdutoComponent } from './cadastro-classe-produto/cadastro-classe-produto.component'
import { CadastroInstanciaProdutoComponent } from './cadastro-instancia-produto/cadastro-instancia-produto.component'

@NgModule({
  declarations: [
    CadastroClasseProdutoComponent,
    CadastroInstanciaProdutoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    CadastroClasseProdutoComponent,
    CadastroInstanciaProdutoComponent
  ]
  
})

export class CadastroModule { }
