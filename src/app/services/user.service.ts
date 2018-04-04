import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { User } from '../models/user';
import { Zone } from '../models/zone';
import {Observable, ObservableInput} from 'rxjs/Observable';


@Injectable()
export class UserService extends APIService {
    public cacheUser: User;
    constructor(public config: AppConfiguration, public http: Http, public authService: AuthService) {
        super(config, authService, http);
    }

    registerUser(name: string, email: string, image: string, password: string, confirmPassword: string) {
        return this.post('users/', { name, email, image, password, confirmPassword }).map(loginResponse => {
            if (loginResponse) {

            }
        });
    }
    updateUser(name: string, email: string, image: string, password: string) {
      return this.post('users/updateprofile/' + this.cacheUser.id, { id: this.cacheUser.id, name: name, email: email,
        image: image, password: password, confirmPassword: password}).map(updateResponse => {
            if (updateResponse) {

            }
        });
    }
    deleteUser() {}
    getUserByEmail(email: string) {
        return this.get('users/' + email);
    }

    getUserById(id: Number): Observable<User> {
      return this.get('users/id/' + id);

    }
    getReportsByUser() {
      let report = this.getUserById(this.cacheUser.id).subscribe( response => {
            report = response.reports();
        });
      return report;
    }
    login(email: string, password: string) {
        return this.post('users/login', { email, password }, { credentials: false }).map(loginResponse => {
            if (loginResponse) {
                this.authService.accessToken = loginResponse.accessToken;
            }
        });
    }
    addZone(email: String, id: Number, number: Number, name: string) {
        return this.post('users/zones/' + email, { id, number, name }).map(loginResponse => {
          return loginResponse;
        });
    }

    deleteZone(email: String, id: Number, number: Number, name: string){
        return this.post('zones/deletedFavorites/'+email, { id, number, name }).map(loginResponse => {
          return loginResponse;
        });
    }

      listFavoriteZones(email: String): Observable<Zone[]> {
          return this.get('zones/favorites/'+email);
      }
}
