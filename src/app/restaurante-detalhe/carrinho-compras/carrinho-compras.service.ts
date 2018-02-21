import { Injectable } from '@angular/core';
import {CarrinhoItem} from './carrinho-item.model';
import {MenuItem} from '../menu-item/menu-item.model';
import 'rxjs/add/operator/map'

@Injectable()
export class CarrinhoComprasService {
  itens: CarrinhoItem[] = [];
  constructor() { }

  addItem(item: MenuItem) {
    let buscaItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)

    if (buscaItem) {
      buscaItem.quantidade++;
    } else {
      this.itens.push(new CarrinhoItem(item))
    }
  }

  removerItem(item: CarrinhoItem) {
    this.itens.splice(this.itens.indexOf(item), 1)
  }

  limpar() {
    this.itens = []
  }

  total(): number {
    return this.itens
      .map(item => item.valor())
      .reduce((prev, value) => prev + value, 0)
  }

}
