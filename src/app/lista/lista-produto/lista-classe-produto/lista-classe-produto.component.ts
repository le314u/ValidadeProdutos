import { ProdutoService } from './../../produto.service';
import { IProduto } from './../../../type/IProduto';
import { Component, OnInit, Input } from '@angular/core';
import { IInstanciaProduto } from '../../../type/IInstanciaProduto';

@Component({
  selector: 'lista-classe-produto',
  templateUrl: './lista-classe-produto.component.html',
  styleUrls: ['./lista-classe-produto.component.css']
})
export class ListaClasseProdutoComponent implements OnInit {
  
  @Input('classe_produto') classe:IProduto;

  produtoService:ProdutoService;
  instancias:IInstanciaProduto[];

  click=false;

  onClick(){
    this.click=!this.click;
  }
  constructor(_produtoService:ProdutoService) {
    this.produtoService = _produtoService;
   }

  ngOnInit(): void { 
    this.instancias = this.produtoService.getInstancias()
  }

}
