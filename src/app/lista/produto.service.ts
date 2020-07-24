import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService{
	constructor(){}
	getInstancias(){
		return [
			{
				entrada:"27/10/2015",
				validade:"28/10/2015",
				duracao:1
			},{
				entrada:"27/09/2015",
				validade:"27/10/2015",
				duracao:30
			}
		]
	}
	getClasses(){
		return [
			{
				nome:"Café",
				cod:110,
				qtd:500,
				um:"g"
			},{
				nome:"Suco",
				cod:111,
				qtd:1,
				um:"l"
			}
		]
	}
}



class IProduto{
	nome:string;
	cod:number;
	qtd:number;
	um:string;
}

 class IInstanciaProduto{
	classe:IProduto;
	entrada:string;
	validade:string;
	duracao:number;
}