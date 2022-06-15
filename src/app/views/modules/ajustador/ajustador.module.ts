import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjustadorRoutingModule } from './ajustador-routing.module';
import { HomeAjustadorComponent } from './components/home-ajustador/home-ajustador.component';


@NgModule({
  declarations: [
    HomeAjustadorComponent
  ],
  imports: [
    CommonModule,
    AjustadorRoutingModule
  ],
  exports: [
    HomeAjustadorComponent
  ]
})
export class AjustadorModule { }
