import { Router}from '@angular/router';
import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import {CacheService} from "ng2-cache/src/services/cache.service";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService extends APIService {
    public cacheUser;
    constructor(public  cacheService: CacheService,public config: AppConfiguration, public http: Http, public authService: AuthService) {
        super(config, authService, http);
    }

    registerUser(name: string, email: string, image: string, password: string, confirmPassword: string) {
        return this.post('users/', { name, email, image, password, confirmPassword }).map(loginResponse => {
            if (loginResponse) {

            }
        });
    }
    updateUser(name: string, email: string, image: string, password: string) {
      return this.post('users/updateprofile/' +this.cacheService.get("user").email(), { name: name, email: email,
        image: image, password: password, confirmPassword: password}).map(updateResponse => {
            if (updateResponse) {

            }
        });
    }
    deleteUser() {}

    getUserByEmail(email: string){
        return this.get('users/' + email);
    }

    getUserById(id: Number){
      return this.get('users/id/' + id);

    }
    login(email: string, password: string) {
        return this.post('users/login', { email, password }, { credentials: false }).map(loginResponse => {
            if (loginResponse) {
                this.cacheUser = this.getUserByEmail(email);
                this.authService.accessToken = loginResponse.accessToken;
            }
        });
    }
}
