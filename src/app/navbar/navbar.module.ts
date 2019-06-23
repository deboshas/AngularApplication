import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NavbarComponent } from '../navbar/navbar.component';
import { PanelMenuModule } from 'primeng/panelmenu';






@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonsModule,
        BrowserAnimationsModule,
        LayoutModule,
        PanelMenuModule

    ],
    exports: [NavbarComponent],
    providers: [],
    bootstrap: [NavbarComponent]
})
export class NavbarModule { }
