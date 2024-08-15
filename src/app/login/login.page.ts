import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm!: FormGroup;
    app_version: string;

    constructor(
        public formBuilder: FormBuilder,
        private apiService: ApiService,
        private router: Router,
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController
    ) {
        // la version tengo que definirla dentro del apiservice?? o debe ser en otro lado?
        this.app_version = this.apiService.app_version;
    }

    ngOnInit() {
        console.log('Inicio Login');
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        console.log(this.apiService.app_version);
        console.log(this.loginForm);
    }

    login() {
        console.log('logear')

        if (this.loginForm.valid) {
            console.log(this.loginForm.value);
            this.loadData();
        } else {
            console.log(this.loginForm);
            return console.log('faltan campos');
        }
    }

    async loadData() {
        const loading = await this.loadingCtrl.create({
            message: 'Validando credenciales...'
        });
        await loading.present();

        this.apiService.post('login', this.loginForm.value).subscribe(
            async response => {
                await loading.dismiss();
                if (response.status === 200 && response.usuario) {
                    // Redirige a la página de inicio
                    this.router.navigate(['/home']);
                }
            },
            async error => {
                await loading.dismiss();
                const alert = await this.alertCtrl.create({
                    header: 'Error',
                    subHeader: error.error.message,
                    message: error.error.status,
                    buttons: ['OK']
                });

                await alert.present();
                console.error('Error posting data', error);
            }
        );
    }


}
