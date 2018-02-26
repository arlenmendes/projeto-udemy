import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-ordem-compra-resumo',
  templateUrl: './ordem-compra-resumo.component.html',
  styleUrls: ['./ordem-compra-resumo.component.css']
})
export class OrdemCompraResumoComponent implements OnInit {

  avaliado: boolean

  constructor() { }

  ngOnInit() {
  }

  avalia() {
    this.avaliado = true
  }

}
