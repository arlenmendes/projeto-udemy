import { Component, OnInit } from '@angular/core';
import {RestaurantesService} from '../restaurantes/restaurantes.service';
import {Restaurante} from '../restaurantes/restaurante/restaurante.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html',
  styleUrls: ['./restaurante-detalhe.component.css']
})
export class RestauranteDetalheComponent implements OnInit {

  restaurante: Restaurante

  constructor(
    private restauranteService: RestaurantesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restauranteService.restaurantesPorId(this.activatedRoute.snapshot.params['id'])
      .subscribe(restaurante => this.restaurante = restaurante)
  }

}
