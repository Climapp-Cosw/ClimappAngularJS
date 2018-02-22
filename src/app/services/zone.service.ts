import { Router }from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Zone } from '../models/zone';

@Injectable()
export class ZoneService extends APIService{

    constructor(public config: AppConfiguration, public http: Http, public authService: AuthService) {
        super(config, authService, http);
    }

    listZones(): Observable<Zone[]> {
        return this.get('zones/');
    }
}
