import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { registrationComponent } from './registration.component';

@NgModule({
    declarations: [
        registrationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonsModule,
        BrowserAnimationsModule,
        LayoutModule
    ],
    exports: [registrationComponent],
    providers: [],
    bootstrap: [registrationComponent]
})
export class RegistrationModule { }
