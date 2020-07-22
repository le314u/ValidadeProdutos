import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instancia-produto',
  templateUrl: './instancia-produto.component.html',
  styleUrls: ['./instancia-produto.component.css']
})
export class InstanciaProdutoComponent implements OnInit {

  produtos=[
    'propriedade1',
    'propriedadeN',
    'propriedade3'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
