import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { RegistrarTrabajadorComponent } from './components/registrar-trabajador/registrar-trabajador.component';


@NgModule({
  declarations: [
    HomeAdministradorComponent,
    RegistrarTrabajadorComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ],
  exports:[
    HomeAdministradorComponent,
    RegistrarTrabajadorComponent
  ]
})
export class AdministradorModule { }
