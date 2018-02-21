import { Injectable } from '@angular/core';

import { Restaurante } from './restaurante/restaurante.model';

import {MEAT_API} from '../app.api';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler'
import {MenuItem} from '../restaurante-detalhe/menu-item/menu-item.model';

@Injectable()
export class RestaurantesService {

  constructor(private http: Http) { }

  restaurantes(): Observable<Restaurante[]> {
    return this.http.get(MEAT_API + '/restaurants')
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantesPorId(id: string): Observable<Restaurante> {
    return this.http.get(MEAT_API + '/restaurants/' + id)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }

  avaliacoesRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }

  menuDoRestaurante(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }

}
