import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictaminarReporteComponent } from './components/dictaminar-reporte/dictaminar-reporte.component';
import { HomeAjustadorComponent } from './components/home-ajustador/home-ajustador.component';
import { ReportesAsignadosComponent } from './components/reportes-asignados/reportes-asignados.component';


const routes: Routes = [
  {
    path: '',
    component: HomeAjustadorComponent
  },
  {
    path: 'dictaminarreporte',
    component: DictaminarReporteComponent
  },
  {
    path: 'reportesasignados',
    component: ReportesAsignadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjustadorRoutingModule { }
