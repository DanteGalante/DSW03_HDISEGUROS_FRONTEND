import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { AdministradorModule } from './modules/administrador/administrador.module';
import { AjustadorModule } from './modules/ajustador/ajustador.module';
import { ConductorModule } from './modules/conductor/conductor.module';
import { EjecutivoModule } from './modules/ejecutivo/ejecutivo.module';
import { AuthenticationModule } from '../authentication/authentication.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    AngularMaterialModule,
    SharedModule,
    AdministradorModule,
    AjustadorModule,
    ConductorModule,
    EjecutivoModule,
    AuthenticationModule
  ],
})
export class ViewsModule { }
