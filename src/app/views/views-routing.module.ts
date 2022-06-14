import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
    {​​​​ 
      path: 'reportes', 
      loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule),
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
