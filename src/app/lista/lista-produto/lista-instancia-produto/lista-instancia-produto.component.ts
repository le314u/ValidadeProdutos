import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-instancia-produto',
  templateUrl: './lista-instancia-produto.component.html',
  styleUrls: ['./lista-instancia-produto.component.css']
})
export class ListaInstanciaProdutoComponent implements OnInit {

  produtos=[
    {
      entrada:'02/04/2020',
      validade:'03/05/2020',
      duracao:'31dias'
    },{
      entrada:'05/04/2020',
      validade:'06/05/2020',
      duracao:'31dias'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
