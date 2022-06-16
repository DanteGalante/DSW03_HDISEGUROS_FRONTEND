import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { RegistrarTrabajadorComponent } from './components/registrar-trabajador/registrar-trabajador.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { ViewsModule } from '../../views.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeAdministradorComponent,
    RegistrarTrabajadorComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    AdministradorRoutingModule,
    SharedModule
  ],
  exports:[
    HomeAdministradorComponent,
    RegistrarTrabajadorComponent
  ]
})
export class AdministradorModule { }
