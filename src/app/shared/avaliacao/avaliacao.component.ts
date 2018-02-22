import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mt-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {

  @Output() avaliado = new EventEmitter<number>()

  avaliacoes: number[] = [1, 2, 3, 4, 5]
  avaliacao: number = 0
  previaAvaliacao: number

  constructor() { }

  ngOnInit() {
  }

  setAvaliacao(a: number) {
    this.avaliacao = a
    this.previaAvaliacao = undefined
    this.avaliado.emit(this.avaliacao)
  }

  setPreviaAvaliacao(a: number) {
    if(this.previaAvaliacao === undefined) {
      this.previaAvaliacao = this.avaliacao
    }
    this.avaliacao = a
  }

  removePreviaAvaliacao() {
    if(this.previaAvaliacao !== undefined) {
      this.avaliacao = this.previaAvaliacao
      this.previaAvaliacao = undefined
    }
  }
}
