import { User} from '../models/user';
import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import {Coordinate} from '../models/coordinate';

@Injectable()
export class ReportService extends APIService {
    constructor(public config: AppConfiguration, public http: Http, public authService: AuthService) {
        super(config, authService, http);
    }

    registerReport(dateTimeReport: Date, coordinate: Coordinate, img: string, comment: string, weather: string, user: User) {
        return this.post('reports/newreports', { dateTimeReport, coordinate, img, comment, weather }).map( responseReport => {
        } );
    }
    deleteReport() {

    }
    getReports() {
      return this.get( 'reports/');
    }

}
