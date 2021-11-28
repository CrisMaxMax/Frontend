import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { AsignarVehiculoComponent } from './asignar-vehiculo/asignar-vehiculo.component';


@NgModule({
  declarations: [
    AsignarVehiculoComponent
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule
  ]
})
export class SolicitudModule { }
