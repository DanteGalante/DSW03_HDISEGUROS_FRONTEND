import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
      },
      {
        path: 'ejecutivo',
        loadChildren: () => import('./modules/ejecutivo/ejecutivo.module').then(m => m.EjecutivoModule)
      },
      {
        path: 'ajustador',
        loadChildren: () => import('./modules/ajustador/ajustador.module').then(m => m.AjustadorModule)
      },
      {
        path: 'conductor',
        loadChildren: () => import('./modules/conductor/conductor.module').then(m => m.ConductorModule)
      },
      {
        path: '**',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
