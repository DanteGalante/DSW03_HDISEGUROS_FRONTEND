import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home.component';
import { ReportesModule } from './reportes/reportes.module';
import { HeaderComponent } from './layout/header/header.component';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    AngularMaterialModule,
    SharedModule,
    ReportesModule
  ]
})
export class ViewsModule { }
