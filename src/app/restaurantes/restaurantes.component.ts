import { Component, OnInit } from '@angular/core';
import {Restaurante} from './restaurante/restaurante.model';
import {RestaurantesService} from './restaurantes.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = []

  constructor(private restauranteServices: RestaurantesService) { }

  ngOnInit() {
    this.restauranteServices.restaurantes()
      .subscribe( rests => this.restaurantes = rests)
  }

}
