import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm!: FormGroup;
    data: any;

    constructor(
        public formBuilder: FormBuilder,
        private apiService: ApiService,
        private router: Router
    ) { }

    ngOnInit() {
        console.log('Inicio Login');
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        console.log(this.loginForm);
    }

    login() {
        console.log('logear')
        if (this.loginForm.valid) {
            console.log(this.loginForm.value);
            this.loadData();
        } else {
            return console.log('faltan campos');
        }
    }

    loadData() {
        this.apiService.post('login', this.loginForm.value).subscribe(
            response => {
                this.data = response;
                console.log(this.data);

                if (this.data.status === 200 && this.data.usuario) {
                    // Redirige a la página de inicio
                    this.router.navigate(['/home']);
                }
            },
            error => {
                console.error('Error posting data', error);
            }
        );
    }

}
