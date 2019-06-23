import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
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
    ButtonsModule,
    BrowserAnimationsModule,
    LayoutModule,
    HomeModule,
    LoginModule,
    RegistrationModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
