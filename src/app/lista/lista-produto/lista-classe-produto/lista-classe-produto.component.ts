import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-classe-produto',
  templateUrl: './lista-classe-produto.component.html',
  styleUrls: ['./lista-classe-produto.component.css']
})
export class ListaClasseProdutoComponent implements OnInit {

  nome='café'
  cod='0011'
  qtd='500'
  um='g'

  click=false
  onClick(){
    this.click=!this.click
  }
  constructor() { }

  ngOnInit(): void {
  }

}
