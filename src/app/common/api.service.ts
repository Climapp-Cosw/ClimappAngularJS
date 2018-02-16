import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class APIService {
  constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) { }

  post(url: string, body: any, options?: any): Observable<any> {
    return this.http
      .post(`${this.config.apiURL}/${url}`, body, this.getRequestOptions(options))
      .map(this.extractData)
      .catch(this.handleError);
  }
      
    get(url: string, options?: any): Observable<any> {
    return this.http
      .get(`${this.config.apiURL}/${url}`, this.getRequestOptions(options))
      .map(this.extractData)
      .catch(this.handleError);
  }

  private getRequestOptions(options?: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    const innerOptions = new RequestOptions({ headers });

    if (!options || options.credentials === undefined || options.credentials === true) {
      headers.append('Authorization', 'Bearer ' + this.authService.accessToken);
    }

    return innerOptions;
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: Response | any) {
    let errObj: any;

    if (error instanceof Response) {
      const body = error.json();
      errObj = body;
    } else {
      errObj = error.message ? { message: error.message } : { message: error };
    }

    return Observable.throw(errObj);
  }
}