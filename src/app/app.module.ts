import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
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
import { OrdemItemComponent } from './ordem-compra/ordem-item/ordem-item.component';
import {OrdemCompraService} from './ordem-compra/ordem-compra.service';
import { CustosEntregaComponent } from './ordem-compra/custos-entrega/custos-entrega.component';
import { OrdemCompraResumoComponent } from './ordem-compra-resumo/ordem-compra-resumo.component';
import {SharedModule} from './shared/shared.module';


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
    OrdemCompraComponent,
    OrdemItemComponent,
    CustosEntregaComponent,
    OrdemCompraResumoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantesService, CarrinhoComprasService, OrdemCompraService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
