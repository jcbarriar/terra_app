import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm!: FormGroup;

    constructor(
        public formBuilder: FormBuilder
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
        } else {
            return console.log('faltan campos');
        }
    }

}
