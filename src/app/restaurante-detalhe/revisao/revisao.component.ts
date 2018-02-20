import { Component, OnInit } from '@angular/core';
import {RestaurantesService} from '../../restaurantes/restaurantes.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-revisao',
  templateUrl: './revisao.component.html',
  styleUrls: ['./revisao.component.css']
})
export class RevisaoComponent implements OnInit {

  revisoes: Observable<any>

  constructor(
    private restaurantesService: RestaurantesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.revisoes = this.restaurantesService.avaliacoesRestaurante(this.activatedRoute.parent.snapshot.params['id'])
  }

}
