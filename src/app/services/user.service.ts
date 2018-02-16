import { Router}from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User} from '../models/user';
import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';

@Injectable()
export class UserService extends APIService{

    constructor(public config: AppConfiguration, public http: Http, public authService: AuthService) {
        super(config, authService, http);
    }

    registerUser(name: string, email: string, image: string, password: string, confirmPassword: string){
        return this.post('users/', { name, email, image, password, confirmPassword }).map(loginResponse => {
            if (loginResponse) {
             
            }
        });
    }
    updateUser(){}
    deleteUser(){}
    
    login(email: string, password: string) {
        return this.post('users/login', { email, password }, { credentials: false }).map(loginResponse => {
            if (loginResponse) {
                this.authService.accessToken = loginResponse.accessToken;
            }
        });
    }
}
