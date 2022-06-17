import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarReportesComponent } from './components/asignar-reportes/asignar-reportes.component';
import { HomeEjecutivoComponent } from './components/home-ejecutivo/home-ejecutivo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeEjecutivoComponent,
    children: [
      {
        path: 'asignarreportes',
        component: AsignarReportesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjecutivoRoutingModule { }
