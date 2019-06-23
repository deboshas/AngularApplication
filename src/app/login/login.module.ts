import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';





@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        BrowserAnimationsModule,

    ],
    exports: [LoginComponent],
    providers: [],
    bootstrap: [LoginComponent]
})
export class LoginModule { }
