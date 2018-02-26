import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from './input/input.component';
import {AvaliacaoComponent} from './avaliacao/avaliacao.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RadioComponent} from './radio/radio.component';
import {OrdemCompraService} from '../ordem-compra/ordem-compra.service';
import {RestaurantesService} from '../restaurantes/restaurantes.service';
import {CarrinhoComprasService} from '../restaurante-detalhe/carrinho-compras/carrinho-compras.service';
import { SnackbarComponent } from './mensagens/snackbar/snackbar.component';
import {NotificacaoService} from './mensagens/notificacao.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputComponent,
    RadioComponent,
    AvaliacaoComponent,
    SnackbarComponent
  ],
  exports: [
    InputComponent,
    RadioComponent,
    AvaliacaoComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SnackbarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        CarrinhoComprasService, RestaurantesService, OrdemCompraService, NotificacaoService
      ]
    }
  }
}
