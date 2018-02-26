import { Component, OnInit } from '@angular/core';
import {CarrinhoComprasService} from './carrinho-compras.service';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mt-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css'],
  animations: [
    trigger('row', [
      state('pronto', style({opacity: 1})),
      transition('void => pronto', animate('300ms 0s ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-30px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset: 0.8}),
        style({opacity: 1, transform: 'translateX(0px)', offset: 1})
      ]))),
      transition('pronto => void', animate('300ms 0s ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0px)', offset: 0}),
        style({opacity: 0.2, transform: 'translateX(-10px)', offset: 0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset: 1})
      ])))
    ])
  ]
})
export class CarrinhoComprasComponent implements OnInit {

  estadoRow: string = 'pronto'

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
