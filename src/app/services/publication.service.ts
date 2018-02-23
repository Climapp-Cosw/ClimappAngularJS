import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import {Report} from '../models/report';

@Injectable()
export class PublicationService extends APIService {
  constructor(public config: AppConfiguration, public http: Http, public authService: AuthService) {
    super(config, authService, http);
  }

  findPublication( report: Report) {
    return this.post('publications/findpublucation', {report}).map( responsePublication => { } );
  }
  deleteReport() {}

  getPublications() {
    return this.get('publications/');
  }
}
