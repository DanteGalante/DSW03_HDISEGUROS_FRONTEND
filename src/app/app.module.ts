import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularMaterialModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
