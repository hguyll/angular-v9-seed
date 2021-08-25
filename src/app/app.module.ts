import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { FooterComponent } from './footer/footer.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ChildComponentComponent, FooterComponent, FormInputComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
