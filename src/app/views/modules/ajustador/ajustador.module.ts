import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjustadorRoutingModule } from './ajustador-routing.module';
import { HomeAjustadorComponent } from './components/home-ajustador/home-ajustador.component';
import { DictaminarReporteComponent } from './components/dictaminar-reporte/dictaminar-reporte.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { ReportesAsignadosComponent } from './components/reportes-asignados/reportes-asignados.component';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeAjustadorComponent,
    DictaminarReporteComponent,
    ReportesAsignadosComponent
  ],
  imports: [
    CommonModule,
    AjustadorRoutingModule,
    AngularMaterialModule,
    SharedModule
    
  ],
  exports: [
    HomeAjustadorComponent,
    DictaminarReporteComponent,
    ReportesAsignadosComponent
  ]
})
export class AjustadorModule { }
