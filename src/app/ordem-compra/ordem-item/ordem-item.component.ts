import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarrinhoItem} from '../../restaurante-detalhe/carrinho-compras/carrinho-item.model';

@Component({
  selector: 'mt-ordem-item',
  templateUrl: './ordem-item.component.html',
  styleUrls: ['./ordem-item.component.css']
})
export class OrdemItemComponent implements OnInit {

  @Input() itens: CarrinhoItem[]

  @Output() aumentarQuantidade = new EventEmitter<CarrinhoItem>()
  @Output() diminuirQuantidade = new EventEmitter<CarrinhoItem>()
  @Output() remover = new EventEmitter<CarrinhoItem>()

  constructor() { }

  ngOnInit() {
  }

  emitirAumentarQuantidade(item: CarrinhoItem) {
    this.aumentarQuantidade.emit(item)
  }
  emitirDiminuirQuantidade(item: CarrinhoItem) {
    this.diminuirQuantidade.emit(item)
  }
  emitirRemover(item: CarrinhoItem) {
    this.remover.emit(item)
  }
}
