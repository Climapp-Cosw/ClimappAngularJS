import { Router}from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User} from '../models/user';
import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Zone } from '../models/zone';

@Injectable()
export class UserService extends APIService{
    private emailuser : string;
    constructor(public config: AppConfiguration, public http: Http, public authService: AuthService) {
        super(config, authService, http);
        this.emailuser=null;
    }

    registerUser(name: string, email: string, image: string, password: string, confirmPassword: string){
        return this.post('users/', { name, email, image, password, confirmPassword }).map(loginResponse => {
            if (loginResponse) {

            }
        });
    }
    updateUser(name: string, email: string, image: string, password: string){
        console.log(email)
        return this.post('users/updateprofile/'+this.emailuser, { name: name, email: email, image:image, password:password ,confirmPassword: password}).map(updateResponse => {
            if (updateResponse) {

            }
        });
    }
    deleteUser(){}

    getUEmail(){
        return this.get('users/'+this.emailuser);

    }
    setEmail(email : string){
        if(this.emailuser!=email){
            this.emailuser=email;
            return this.getUEmail();
        }

    }
    login(email: string, password: string) {
        return this.post('users/login', { email, password }, { credentials: false }).map(loginResponse => {
            if (loginResponse) {
                this.emailuser=email;
                this.authService.accessToken = loginResponse.accessToken;
            }
        });
    }
    addZone(email: String, id: Number, number: Number, name: string) {
        return this.post('users/zones/'+email, { id, number, name }).map(loginResponse => {
        });
    }
}
