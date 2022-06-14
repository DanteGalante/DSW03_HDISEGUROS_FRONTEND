import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaReportesComponent } from './components/lista-reportes/lista-reportes.component';
import { ReportesRoutingModule } from './reportes-routing.module';


@NgModule({
  declarations: [
    ListaReportesComponent,
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
