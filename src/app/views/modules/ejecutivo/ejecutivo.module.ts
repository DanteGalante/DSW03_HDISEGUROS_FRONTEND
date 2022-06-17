import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecutivoRoutingModule } from './ejecutivo-routing.module';
import { AsignarReportesComponent } from './components/asignar-reportes/asignar-reportes.component';
import { HomeEjecutivoComponent } from './components/home-ejecutivo/home-ejecutivo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';


@NgModule({
  declarations: [
    AsignarReportesComponent,
    HomeEjecutivoComponent
  ],
  imports: [
    CommonModule,
    EjecutivoRoutingModule,
    SharedModule,
    AngularMaterialModule
  ],
  exports: [
    HomeEjecutivoComponent
  ]
})
export class EjecutivoModule { }
