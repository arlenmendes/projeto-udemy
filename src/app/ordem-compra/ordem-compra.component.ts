import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';

@Component({
  selector: 'mt-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  opcoesPagamento: RadioOption[] = [
    new RadioOption('Dinheiro', 'DIN'),
    new RadioOption('Cartão Débito', 'DEB'),
    new RadioOption('Cartão Crédito', 'CRED'),
    new RadioOption('Cartão Refeição', 'REF')
  ];

  constructor() { }

  ngOnInit() {
  }

}
