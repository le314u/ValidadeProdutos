import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  classes = [
    1,2,3,4,5
  ]

  constructor() { }

  ngOnInit(): void {
  }

}