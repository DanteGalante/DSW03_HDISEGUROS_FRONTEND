import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeConductorComponent } from './components/home-conductor/home-conductor.component';
import { RegistrarConductorComponent } from './components/registrar-conductor/registrar-conductor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeConductorComponent,
    children: [
      {
        path: 'registrar-trabajador',
        component: RegistrarConductorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConductorRoutingModule { }
