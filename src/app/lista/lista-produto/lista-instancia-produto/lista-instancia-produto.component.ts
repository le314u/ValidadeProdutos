import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IInstanciaProduto } from './../../../type/IInstanciaProduto';

@Component({
  selector: 'lista-instancia-produto',
  templateUrl: './lista-instancia-produto.component.html',
  styleUrls: ['./lista-instancia-produto.component.css']
})
export class ListaInstanciaProdutoComponent implements OnInit {
  @Input('instancias') produtos:IInstanciaProduto;
  @Output('upInstancia') upInstancia = new EventEmitter();

  onClickInstancia(produto){
    this.upInstancia.emit(produto)
  }

  constructor() { }

  ngOnInit(): void {
  }

}