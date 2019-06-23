import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from '../app/home/home.module';
import { LoginModule } from '../app/Login/Login.module';
import { RegistrationModule } from '../app/registration/registration.module';
import { HomeComponent } from './home/home.component';
import { NavbarModule } from "../app/navbar/navbar.module";





@NgModule({
  declarations: [
    AppComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,

    HomeModule,
    LoginModule,
    RegistrationModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
