import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { RouterModule } from "@angular/router";
import { GridsterModule } from "angular2gridster/dist";
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    declarations: [

    ],
    entryComponents: [

    ],
    imports:
    [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        GridsterModule,
        NgxChartsModule,
        RouterModule
    ],
    exports:
    [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        GridsterModule,
        NgxChartsModule,
        RouterModule
    ],
    providers:
    [

    ]
})
export class SharedModule { }
