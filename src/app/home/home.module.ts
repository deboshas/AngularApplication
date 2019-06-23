import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home.component';





@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        BrowserAnimationsModule,

    ],
    exports: [HomeComponent],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
