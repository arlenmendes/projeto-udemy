import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mt-custos-entrega',
  templateUrl: './custos-entrega.component.html',
  styleUrls: ['./custos-entrega.component.css']
})
export class CustosEntregaComponent implements OnInit {

  @Input() entrega: number
  @Input() valorItens: number

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.entrega + this.valorItens
  }
}
