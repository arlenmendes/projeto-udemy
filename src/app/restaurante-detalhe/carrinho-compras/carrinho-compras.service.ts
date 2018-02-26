import { Injectable } from '@angular/core';
import {CarrinhoItem} from './carrinho-item.model';
import {MenuItem} from '../menu-item/menu-item.model';
import 'rxjs/add/operator/map'
import {NotificacaoService} from '../../shared/mensagens/notificacao.service';

@Injectable()
export class CarrinhoComprasService {
  itens: CarrinhoItem[] = [];
  constructor(
    private notificacaoService: NotificacaoService
  ) { }

  addItem(item: MenuItem) {
    let buscaItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)

    if (buscaItem) {
      buscaItem.quantidade++;
    } else {
      this.itens.push(new CarrinhoItem(item))
    }

    this.notificacaoService.notificar(`Você adicionou o item ${item.name}`)
  }

  removerItem(item: CarrinhoItem) {
    this.itens.splice(this.itens.indexOf(item), 1)
    this.notificacaoService.notificar(`Você removeu o item ${item.menuItem.name}`)
  }

  limpar() {
    this.itens = []
  }

  total(): number {
    return this.itens
      .map(item => item.valor())
      .reduce((prev, value) => prev + value, 0)
  }

  aumentarQuantidade(item: CarrinhoItem) {
    item.quantidade++;
  }

  diminuirQuantidade(item: CarrinhoItem) {
    item.quantidade--;
    if(item.quantidade === 0) {
      this.removerItem(item)
    }
  }

}
