import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from './input/input.component';
import {AvaliacaoComponent} from './avaliacao/avaliacao.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RadioComponent} from './radio/radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputComponent,
    RadioComponent,
    AvaliacaoComponent
  ],
  exports: [
    InputComponent,
    RadioComponent,
    AvaliacaoComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
