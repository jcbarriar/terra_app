import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor() { }

    visualizar() {
        console.log('visualizo Orden de servicio')
    }

    crearOrden() {
        console.log('Crear Orden')
    }
}
