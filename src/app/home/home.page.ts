import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrdenServicioPage } from '../orden-servicio/orden-servicio.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private modalController: ModalController
    ) { }

    visualizar() {
        console.log('visualizo Orden de servicio')
    }

    async crearOrden() {
        console.log('Crear Orden')
        const modal = await this.modalController.create({
            component: OrdenServicioPage,
            componentProps: {}
        });
        return await modal.present();
    }
}
