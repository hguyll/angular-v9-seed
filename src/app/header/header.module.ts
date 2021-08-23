import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header.component";
import { AppModule } from "../app.module";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class HeaderModule{}