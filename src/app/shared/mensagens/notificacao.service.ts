import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class NotificacaoService {
  notificador = new EventEmitter<string>()
  constructor() { }

  notificar(mensagem: string) {
    this.notificador.emit(mensagem)
  }

}
