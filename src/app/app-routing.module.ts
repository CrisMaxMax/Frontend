import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
   },
   {
     path:"",
     pathMatch :'full',
     redirectTo :'/inicio'
   },
   /*{
     path:'**',
     component: ErrorComponent
   },*/

   {
     //Enrutamiento a los modulos
     path:'seguridad',
     loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x =>x.SeguridadModule)
   },
   {
     path:'pedidos',
     loadChildren: () => import("./modulos/solicitud/solicitud.module").then(x =>x.SolicitudModule)
   },
   {
     path:'administracion',
     loadChildren: () => import("./modulos/administracion/administracion.module").then(x =>x.AdministracionModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
