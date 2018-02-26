import { Component, OnInit, Input } from '@angular/core';
import {Restaurante} from './restaurante.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  animations: [
    trigger('restauranteAparece', [
      state('pronto', style({
        opacity: 1
      })),
      transition('void => pronto', [
        style({opacity: 0, transform: 'translate( -30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestauranteComponent implements OnInit {

  estadoRestaurante = 'pronto'

  @Input() restaurante: Restaurante

  constructor() { }

  ngOnInit() {
  }

}
