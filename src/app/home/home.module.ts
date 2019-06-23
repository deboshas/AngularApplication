import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { HomeComponent } from './home.component';





@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonsModule,
        BrowserAnimationsModule,
        LayoutModule
    ],
    exports: [HomeComponent],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
