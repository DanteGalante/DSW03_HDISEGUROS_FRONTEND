import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConductorRoutingModule } from './conductor-routing.module';
import { HomeConductorComponent } from './components/home-conductor/home-conductor.component';
import { RegistrarConductorComponent } from './components/registrar-conductor/registrar-conductor.component';
import { HeaderComponent } from 'src/app/authentication/layout/header/header.component';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';


@NgModule({
  declarations: [
    HomeConductorComponent,
    RegistrarConductorComponent,
  ],
  imports: [
    CommonModule,
    ConductorRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeConductorComponent,
    RegistrarConductorComponent,
  ]
})
export class ConductorModule { }
