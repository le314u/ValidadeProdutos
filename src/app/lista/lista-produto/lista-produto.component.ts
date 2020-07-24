import { IProduto } from './../../type/IProduto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service'

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

}