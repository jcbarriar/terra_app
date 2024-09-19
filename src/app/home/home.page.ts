import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrdenServicioPage } from '../orden-servicio/orden-servicio.page';
import { DatosAppService } from '../services/datos-app.service';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private modalController: ModalController,
        private datosAppService: DatosAppService,
        private loadingCtrl: LoadingController
    ) {
        this.datosAppService.loadDatos();
    }

    visualizar() {
        console.log('visualizo Orden de servicio')
    }

    async recargar() {
        const carga = await this.loadingCtrl.create({
            message: 'Recargando datos...'
        });
        await carga.present();

        try {
            await this.datosAppService.loadDatos();
        } catch (error) {
            console.error('Error al recargar los datos:', error);
        } finally {
            await carga.dismiss();
        }
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
