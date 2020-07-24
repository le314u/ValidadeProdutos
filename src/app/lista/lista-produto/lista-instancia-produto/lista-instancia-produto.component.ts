import { IInstanciaProduto } from './../../../type/IInstanciaProduto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lista-instancia-produto',
  templateUrl: './lista-instancia-produto.component.html',
  styleUrls: ['./lista-instancia-produto.component.css']
})
export class ListaInstanciaProdutoComponent implements OnInit {
  @Input('instancias') produtos:IInstanciaProduto;
  constructor() { }

  ngOnInit(): void {
  }

}
