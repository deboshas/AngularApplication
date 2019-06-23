import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LoginComponent } from './login.component';





@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonsModule,
        BrowserAnimationsModule,
        LayoutModule
    ],
    exports: [LoginComponent],
    providers: [],
    bootstrap: [LoginComponent]
})
export class LoginModule { }
