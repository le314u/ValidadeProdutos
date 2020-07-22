import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe-produto',
  templateUrl: './classe-produto.component.html',
  styleUrls: ['./classe-produto.component.css']
})
export class ClasseProdutoComponent implements OnInit {

  classes = [
    {
      nome:'café',
      cod:'0011',
      qtd:500,
      um:'g'
    },{
      nome:'suco em pó',
      cod:'0010',
      qtd:15,
      um:'g'
    },{
      nome:'saca de milho grego',
      cod:'001178',
      qtd:9875,
      um:'g/l'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
