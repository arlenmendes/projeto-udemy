import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrdemCompraComponent} from './ordem-compra.component';
import {OrdemItemComponent} from './ordem-item/ordem-item.component';
import {CustosEntregaComponent} from './custos-entrega/custos-entrega.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: OrdemCompraComponent}
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    OrdemCompraComponent,
    OrdemItemComponent,
    CustosEntregaComponent
  ],
})
export class OrdemCompraModule { }
