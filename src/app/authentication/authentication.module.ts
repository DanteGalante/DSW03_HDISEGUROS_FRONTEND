import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './layout/header/header.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
