import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProdutoService } from './../../produto.service';
import { IInstanciaProduto } from '../../../type/IInstanciaProduto';
import { IProduto } from './../../../type/IProduto';

@Component({
  selector: 'lista-classe-produto',
  templateUrl: './lista-classe-produto.component.html',
  styleUrls: ['./lista-classe-produto.component.css']
})
export class ListaClasseProdutoComponent implements OnInit {
  
  @Input('classeProduto') classe:IProduto;
  @Output('upResize') upResize = new EventEmitter();

  produtoService:ProdutoService;
  instancias:IInstanciaProduto[];

  visible=false;

  onClick(){
    this.visible=!this.visible;
    this.upResize.emit(this.visible);
  }

  constructor(_produtoService:ProdutoService) {
    this.produtoService = _produtoService;
  }

  onInstancia(instancia){
    /*Quando clicou em uma Instancia*/
    console.log("Clicou em",instancia,this.classe);
  }

  ngOnInit(): void {
    this.instancias = this.produtoService.getInstancias()
  }

}
