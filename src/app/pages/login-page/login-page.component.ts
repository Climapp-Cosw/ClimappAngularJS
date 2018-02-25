import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../common/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    public loginError: string;
    public signInForm: FormGroup;
    public authService: AuthService;

    constructor(public formBuilder: FormBuilder, public router: Router, public usersService: UserService) {

    }

    ngOnInit() {
        this.signInForm = this.formBuilder.group({
            email: '',
            password: ''
    });
    }

    routeToHome() {
        this.router.navigate(['/']);
    }

    doLogin() {
        this.usersService.login(
            this.signInForm.get('email').value,
            this.signInForm.get('password').value).subscribe(loginResponse => {
                this.usersService.getUserByEmail(this.signInForm.get('email').value).subscribe(response => {
                    this.usersService.cacheUser = response;
                    this.router.navigate(['/publicWeather']);
                  }
                );
        }, error => {
            this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
        });
    }

}
