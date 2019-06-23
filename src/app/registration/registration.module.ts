import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registrationComponent } from './registration.component';

@NgModule({
    declarations: [
        registrationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        BrowserAnimationsModule,

    ],
    exports: [registrationComponent],
    providers: [],
    bootstrap: [registrationComponent]
})
export class RegistrationModule { }
