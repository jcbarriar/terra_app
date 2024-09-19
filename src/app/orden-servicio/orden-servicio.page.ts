import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatosAppService } from '../services/datos-app.service';

@Component({
    selector: 'app-orden-servicio',
    templateUrl: './orden-servicio.page.html',
    styleUrls: ['./orden-servicio.page.scss'],
})
export class OrdenServicioPage implements OnInit {

    formData: {
        empresa: any;
        direccion: string;
        solicitadoPor: string;
        telefono: string;
        email: string;
        nombreEquipo: string;
        call: string;
        mmsi: string;
        marca: string;
        modelo: string;
        serie: string;
        observaciones: string[];
        descripcionTrabajo: string[];
    } = {
            empresa: [],
            direccion: '',
            solicitadoPor: '',
            telefono: '',
            email: '',
            nombreEquipo: '',
            call: '',
            mmsi: '',
            marca: '',
            modelo: '',
            serie: '',
            observaciones: [],
            descripcionTrabajo: []
        };

    nuevaObservacion: string = '';
    nuevaDescripcion: string = '';
    empresas: any[];

    constructor(
        private modalCtrl: ModalController,
        private datosAppService: DatosAppService
    ) { 
        this.empresas = [];
    }

    ngOnInit() {
        this.loadDatos();
    }

    loadDatos(): void {
        this.empresas = this.datosAppService.getItem('empresas');
    }

    cerrarModal() {
        this.modalCtrl.dismiss();
    }

    agregarDetalle(tipo: string) {
        if(tipo === 'observacion') {
            if (this.nuevaObservacion.trim()) {
                this.formData.observaciones.push(this.nuevaObservacion.trim());
                this.nuevaObservacion = '';
            }
        }
        else if (tipo === 'descripcion') {
            if (this.nuevaDescripcion.trim()) {
                this.formData.descripcionTrabajo.push(this.nuevaDescripcion.trim());
                this.nuevaDescripcion = '';
            }
        }
    }

    guardar() {
        console.log('Datos de la Orden de Servicio:', this.formData);
        this.cerrarModal();
    }

}
