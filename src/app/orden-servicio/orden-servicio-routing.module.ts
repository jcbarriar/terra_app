import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenServicioPage } from './orden-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenServicioPageRoutingModule {}
