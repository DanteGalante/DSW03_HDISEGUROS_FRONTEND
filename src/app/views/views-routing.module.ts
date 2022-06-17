import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
      },
      {
        path: 'ejecutivo',
        loadChildren: () => import('./modules/ejecutivo/ejecutivo.module').then(m => m.EjecutivoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
