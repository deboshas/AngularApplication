import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from '../navbar/navbar.component';







@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        BrowserAnimationsModule



    ],
    exports: [NavbarComponent],
    providers: [],
    bootstrap: [NavbarComponent]
})
export class NavbarModule { }
