import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DatosAppService } from '../services/datos-app.service';
import { ApiService } from '../services/api.service';

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
        id_usuario: any;
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
            descripcionTrabajo: [],
            id_usuario: null
        };

    nuevaObservacion: string = '';
    nuevaDescripcion: string = '';
    empresas: any[];

    constructor(
        private modalCtrl: ModalController,
        private alertCtrl: AlertController,
        private datosAppService: DatosAppService,
        private apiService: ApiService
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
        const userData = this.datosAppService.getItem('usuario');
        this.formData = {
            ...this.formData,
            id_usuario: userData.id
        };
        this.apiService.post('store', this.formData).subscribe(
            (response: any) => {
                console.log('Respuesta del servidor:', response);
                if (response.status === 200) {
                    this.alertCtrl.create({
                        header: 'Orden de Servicio',
                        message: response.mensaje,
                        buttons: ['Aceptar']
                    }).then(alert => {
                        alert.present();
                    });
                    this.cerrarModal();
                } else {
                    this.alertCtrl.create({
                        header: 'Orden de Servicio',
                        message: response.mensaje,
                        buttons: ['Aceptar']
                    }).then(alert => {
                        alert.present();
                    });
                }
            },
            (error) => {
                console.error('Error al guardar la orden de servicio:', error);
            }
        );
    }

}
