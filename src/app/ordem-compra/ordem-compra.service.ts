import { Injectable } from '@angular/core';
import {CarrinhoComprasService} from '../restaurante-detalhe/carrinho-compras/carrinho-compras.service';
import {CarrinhoItem} from '../restaurante-detalhe/carrinho-compras/carrinho-item.model';
import {OrdemCompra} from './ordem-compra.model';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from '@angular/http';
import {MEAT_API} from '../app.api';

@Injectable()
export class OrdemCompraService {

  constructor(
    private carrinhoService: CarrinhoComprasService,
    private http: Http
  ) { }

  itensCarrinho(): CarrinhoItem[] {
    return this.carrinhoService.itens
  }

  aumentarQuantidade(item: CarrinhoItem) {
    this.carrinhoService.aumentarQuantidade(item)
  }

  diminuirQuantidade(item: CarrinhoItem) {
    this.carrinhoService.diminuirQuantidade(item)
  }

  removerItem(item: CarrinhoItem) {
    this.carrinhoService.removerItem(item);
  }

  valorItens(): number {
    return this.carrinhoService.total()
  }

  verificarCompra(ordemCompra: OrdemCompra): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return this.http.post(`${MEAT_API}/orders`,
                          JSON.stringify(ordemCompra),
                          new RequestOptions({headers: headers}))
                    .map(response => response.json())
                    .map(order => order.id)
  }

  limpar() {
    this.carrinhoService.limpar()
  }

}
