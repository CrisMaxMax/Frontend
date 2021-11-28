import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './modulos/usuario/crear-usuario/crear-usuario.component';
import { MenuNavbComponent } from './plantilla/menu-navb/menu-navb.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    MenuNavbComponent,
    FooterComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
