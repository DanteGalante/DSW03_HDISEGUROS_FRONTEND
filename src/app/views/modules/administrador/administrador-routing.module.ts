import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { RegistrarTrabajadorComponent } from './components/registrar-trabajador/registrar-trabajador.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAdministradorComponent
  },
  {
    path: 'registrartrabajador',
    component: RegistrarTrabajadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
