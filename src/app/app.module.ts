import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from "./core/shared/module/shared.module";
import { MatButtonModule, MatCheckboxModule, MatRadioModule, MatSliderModule } from '@angular/material';

@NgModule({
    declarations:
    [
        AppComponent
    ],
    imports:
    [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    exports:
    [
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
