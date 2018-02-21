import {Component, Input, OnInit} from '@angular/core';
import {CarrinhoItem} from '../../restaurante-detalhe/carrinho-compras/carrinho-item.model';

@Component({
  selector: 'mt-ordem-item',
  templateUrl: './ordem-item.component.html',
  styleUrls: ['./ordem-item.component.css']
})
export class OrdemItemComponent implements OnInit {

  @Input() itens: CarrinhoItem[]

  constructor() { }

  ngOnInit() {
  }

}
