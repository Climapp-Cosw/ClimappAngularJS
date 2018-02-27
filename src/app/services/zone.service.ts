import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Zone } from '../models/zone';
import {StompService} from './stomp.service';


@Injectable()
export class ZoneService extends APIService {
    constructor(public config: AppConfiguration, public http: Http, public authService: AuthService,
                private stompService: StompService) {
        super(config, authService, http);

    }

      listZones(): Observable<Zone[]> {
          return this.get('zones/');
      }


      suscribeZone(id: Number, name: string) {
        this.stompService.numberZone = id;

      }
  }

