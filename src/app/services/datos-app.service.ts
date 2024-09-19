import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class DatosAppService {

    constructor(
        private apiService: ApiService
    ) { }

    // Función para guardar datos en el localStorage
    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Función para obtener datos del localStorage
    getItem(key: string): any {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    // Función para eliminar un dato del localStorage
    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    // Función para limpiar todo el localStorage
    clear(): void {
        localStorage.clear();
    }

    loadDatos() : void {
        this.apiService.get('empresas').subscribe(
            (response: any) => {
                // Guardar los datos en el localStorage
                this.setItem('empresas', response);

                // Puedes obtener los datos almacenados para verificarlos
                let empresaData = this.getItem('empresas');
                console.log('Datos de empresas almacenados:', empresaData);
            },
            (error) => {
                console.error('Error al obtener los datos de la empresa', error);
            }
        )
    }
}
