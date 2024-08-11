import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenServicioPageRoutingModule } from './orden-servicio-routing.module';

import { OrdenServicioPage } from './orden-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenServicioPageRoutingModule
  ],
  declarations: [OrdenServicioPage]
})
export class OrdenServicioPageModule {}
