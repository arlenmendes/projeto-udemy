import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import {PreloadAllModules, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app-routes';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurante-detalhe/menu/menu.component';
import { CarrinhoComprasComponent } from './restaurante-detalhe/carrinho-compras/carrinho-compras.component';
import { MenuItemComponent } from './restaurante-detalhe/menu-item/menu-item.component';
import { RevisaoComponent } from './restaurante-detalhe/revisao/revisao.component';
import { OrdemCompraResumoComponent } from './ordem-compra-resumo/ordem-compra-resumo.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetalheComponent,
    MenuComponent,
    CarrinhoComprasComponent,
    MenuItemComponent,
    RevisaoComponent,
    OrdemCompraResumoComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
