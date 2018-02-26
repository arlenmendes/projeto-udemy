import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NotificacaoService} from '../notificacao.service';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visivel', [
      state('oculto', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visivel', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('oculto => visivel', animate('500ms 0s ease-in')),
      transition('visivel => oculto', animate('500ms 0s ease-out'))

    ])
  ]
})
export class SnackbarComponent implements OnInit {
  mensagem: string = 'Olá'
  snacVisivel: string = 'oculto'
  constructor(
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit() {
    this.notificacaoService.notificador
      .do(mensagem => {
        this.mensagem = mensagem
        this.snacVisivel = 'visivel'
      }).switchMap(mensgem => Observable.timer(2500))
        .subscribe(timer => this.snacVisivel = 'oculto')
  }
}
