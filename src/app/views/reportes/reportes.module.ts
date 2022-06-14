import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaReportesComponent } from './components/lista-reportes/lista-reportes.component';
import { ReportesRoutingModule } from './reportes-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListaReportesComponent,
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    RouterModule
  ]
})
export class ReportesModule { }
