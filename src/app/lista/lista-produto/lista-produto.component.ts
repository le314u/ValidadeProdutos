import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service'
import { IProduto } from './../../type/IProduto';

@Component({
  selector: 'lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})

export class ListaProdutoComponent implements OnInit {

  produtoService:ProdutoService;
  classes:IProduto[];

  constructor(_produtoService: ProdutoService) { 
    this.produtoService = _produtoService
  }

  ngOnInit(): void {
    this.classes = this.produtoService.getClasses()
  }

  swapWidthPage(event,componente){
    //componente.__ngContext__[20]   é muito rudimentar
    if(event){
      componente.__ngContext__[20].style='width:100%'
    }else{
      componente.__ngContext__[20].style='width:auto'
    }
  }

}