import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component'
import { ContenidoComponent } from './contenido/contenido.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"contenido", component:ContenidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
