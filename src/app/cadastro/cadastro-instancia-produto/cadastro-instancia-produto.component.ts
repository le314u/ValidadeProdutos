import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadastro-instancia-produto',
  templateUrl: './cadastro-instancia-produto.component.html',
  styleUrls: ['./cadastro-instancia-produto.component.css']
})
export class CadastroInstanciaProdutoComponent implements OnInit {

  produtos=[
    'propriedade1',
    'propriedadeN',
    'propriedade3'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
