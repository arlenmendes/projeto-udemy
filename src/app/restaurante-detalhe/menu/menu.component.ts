import { Component, OnInit } from '@angular/core';
import {RestaurantesService} from '../../restaurantes/restaurantes.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantesService.menuDoRestaurante(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem) {
    console.log(item)
  }

}
