import { User} from '../models/user';
import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import {Coordinate} from '../models/coordinate';
import {Report} from '../models/report';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReportService extends APIService {
    constructor(public config: AppConfiguration, public http: Http, public authService: AuthService) {
        super(config, authService, http);
    }
    registerReport(dateTimeReport: Date, coordinate: Coordinate, img: string, comment: string, weather: string, user: User)
    : Observable<Report> {
        return this.post('reports/newreport/' + coordinate.latitude + '&' + coordinate.longitude, {dateTimeReport: dateTimeReport,
          coordinate: coordinate, img: img, comment: comment, weather: weather,
          reportedUser: user, zone: null } );
    }
    deleteReport() {

    }
    getReports() {
      return this.get( 'reports/');
    }

}
