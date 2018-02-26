import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from './menu-item.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('itemMenuAparece', [
      state('pronto', style({
        opacity: 1
      })),
      transition('void => pronto', [
        style({opacity: 0, transform: 'translateY( -20px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  estadoMenuItem = 'pronto'
  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem)
  }

}
