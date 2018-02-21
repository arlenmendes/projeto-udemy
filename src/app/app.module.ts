import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ROUTES } from './app-routes';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import {RestaurantesService} from './restaurantes/restaurantes.service';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurante-detalhe/menu/menu.component';
import { CarrinhoComprasComponent } from './restaurante-detalhe/carrinho-compras/carrinho-compras.component';
import { MenuItemComponent } from './restaurante-detalhe/menu-item/menu-item.component';
import { RevisaoComponent } from './restaurante-detalhe/revisao/revisao.component';
import {CarrinhoComprasService} from './restaurante-detalhe/carrinho-compras/carrinho-compras.service';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import {FormsModule} from '@angular/forms';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrdemItemComponent } from './ordem-compra/ordem-item/ordem-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetalheComponent,
    MenuComponent,
    CarrinhoComprasComponent,
    MenuItemComponent,
    RevisaoComponent,
    OrdemCompraComponent,
    InputComponent,
    RadioComponent,
    OrdemItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [RestaurantesService, CarrinhoComprasService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
