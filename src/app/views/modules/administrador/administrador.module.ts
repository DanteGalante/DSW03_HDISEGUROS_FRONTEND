import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { RegistrarTrabajadorComponent } from './components/registrar-trabajador/registrar-trabajador.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';


@NgModule({
  declarations: [
    HomeAdministradorComponent,
    RegistrarTrabajadorComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    AdministradorRoutingModule
  ],
  exports:[
    HomeAdministradorComponent,
    RegistrarTrabajadorComponent
  ]
})
export class AdministradorModule { }
