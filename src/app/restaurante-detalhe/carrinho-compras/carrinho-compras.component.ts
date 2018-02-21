import { Component, OnInit } from '@angular/core';
import {CarrinhoComprasService} from './carrinho-compras.service';

@Component({
  selector: 'mt-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  constructor(
    private carrinhoComprasService: CarrinhoComprasService
  ) { }

  ngOnInit() {
  }

  itens(): any[] {
    return this.carrinhoComprasService.itens
  }

  total(): number {
    return this.carrinhoComprasService.total()
  }

  limpar() {
    this.carrinhoComprasService.limpar()
  }

  removeItem(item: any) {
    this.carrinhoComprasService.removerItem(item)
  }

  addItem(item: any) {
    this.carrinhoComprasService.addItem(item)
  }
}
