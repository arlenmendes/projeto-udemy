import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RestaurantesComponent} from './restaurantes/restaurantes.component';
import {RestauranteDetalheComponent} from './restaurante-detalhe/restaurante-detalhe.component';
import {MenuComponent} from './restaurante-detalhe/menu/menu.component';
import {RevisaoComponent} from './restaurante-detalhe/revisao/revisao.component';
import {OrdemCompraComponent} from './ordem-compra/ordem-compra.component';
import {OrdemCompraResumoComponent} from './ordem-compra-resumo/ordem-compra-resumo.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'restaurantes/:id', component: RestauranteDetalheComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full'},
      { path: 'menu', component: MenuComponent },
      { path: 'revisao', component: RevisaoComponent}
    ]
  },
  {path: 'ordem-compra', component: OrdemCompraComponent},
  {path: 'ordem-compra-resumo', component: OrdemCompraResumoComponent}
]
