import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavbComponent } from './plantilla/menu-navb/menu-navb.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
//import { ErrorComponent } from './plantilla/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavbComponent,
    FooterComponent,
    InicioComponent,
    ErrorComponent,
    //ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
