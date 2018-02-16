import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import {UserService}from '../../services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
    private userForm: FormGroup;

    constructor(public userService: UserService, public formBuilder: FormBuilder, public router: Router) {

    }
  
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: '',
            email: '',
            image: '',
            password: '',
            confirmPassword: ''
        });
    }
  
    routeToHome(){
        this.router.navigate(['/']);
    }
    
    onSubmit() {
        this.userService. registerUser(
            this.userForm.get('name').value,
            this.userForm.get('email').value,
            this.userForm.get('image').value,
            this.userForm.get('password').value
        ).subscribe(serverResponse=>{
            this.router.navigate(['/home']);
        }, error=>{
            console.log(error);
        });
  }

}
