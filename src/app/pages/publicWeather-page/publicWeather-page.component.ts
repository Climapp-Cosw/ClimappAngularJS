///<reference path="../../models/report.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { geolocation } from 'geolocation';
import { AgmCoreModule } from '@agm/core';
import {ReportService} from '../../services/report.service';
import {Coordinate} from '../../models/coordinate';
import {PublicationService} from '../../services/publication.service';
import {Report} from '../../models/report';
import {User} from '../../models/user';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ZoneService} from '../../services/zone.service';
import {Zone} from '../../models/zone';

@Component({
  selector: 'app-publicweather-page' ,
  templateUrl: './publicWeather-page.component.html',
  styleUrls: ['./publicWeather-page.component.css']
})
export class PublicWeatherPageComponent implements OnInit {
    public publicWeatherForm: FormGroup;
    public lat: Number = 4.748638;
    public long: Number = -74.030353;
    private static _zoneSuscribe = [] ;
    private static _lat_circle: Number;
    private static _long_circle: Number;
    private static _weather_color;
    public circles: Report[] = [];
    private report: Report = null;
    private user: User;
    public infoModal: string;
    constructor(public publicationService: PublicationService,
                public userService: UserService, public reportService: ReportService,
                public formBuilder: FormBuilder, public router: Router,
                private modalService: NgbModal) {
      this.user = this.userService.cacheUser;
      this.getPublicationsInit();
    }
    ngOnInit() {

      this.publicWeatherForm = this.formBuilder.group({
        idRegionesFavoritas : '',
      });
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      }
    }
    private setPosition(position) {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      console.log(position.coords);
    }
    routeToHome() {
        this.router.navigate(['/']);
    }

    sendReport( weather: string, content) {
      // Latitud:4.748638
      // Longitud:-74.030353
      this.reportService.registerReport(
        new Date(), new Coordinate( this.lat, this.long), 'assets/img/' + weather + '.png',
         'comment', weather , this.user
      ).subscribe(response => {
          this.report = response;
          this.infoModal = 'A new report has been registered ';
          this.publicationService.findPublication(this.report).subscribe( response2 => {
            if (response2 === true) {
              this.infoModal += 'The publication is been made ';
            } else {
              this.infoModal += 'The publication hasnt been made ';
            }
            this.modalService.open(content, { windowClass: 'dark-modal' });
          }, error2 => {
            console.log('Publication not found' + error2);
          });
      }, error => {
        this.infoModal = error.message;
        this.modalService.open(content, { windowClass: 'dark-modal' });
        console.log(error);
        console.log(error.message);
      });
    }
    private getPublicationsInit() {
      //alert("ENTRA A LA FUNCION!!")
      this.publicationService.getPublications().subscribe( response => {
              response.map(function(publication) {
                /*PublicWeatherPageComponent.drawCircleMap(publication.reports);*/
                PublicWeatherPageComponent.add({weather: 'assets/img/' + publication.reports[1].weather + '.png', zone: publication.reports[1].zone.name  });
                /*this.userService.getUserById(this.user.id).subscribe( response =>  {
                      response.zones.map(function (z: Zone) {
                          if( z.number === publication.reports[1].zone.number){
                            PublicWeatherPageComponent.add({weather: 'assets/img/' + publication.reports[1].weather + '.png', zone: publication.reports[1].zone.name  });
                          }
                      })
                });*/
                this.circle = publication.reports.map(function(report) {
                        return {latit: report.coordinate.latitude, longit: report.coordinate.longitude, color: 'red'};
                  }
                );
              });
        }, error => {
            console.log( error);
        });
    }
    static drawCircleMap(report: Report) {
      /**dibujar en el mapa las cordenadas de la publicaciones, con el color del clima de cada reporte**/
      this._weather_color = 'red';
      this._lat_circle = report.coordinate.latitude;
      this._long_circle = report.coordinate.longitude;
    }

    static add(data) {
      this._zoneSuscribe.push(data);

    }
    get lat_circle(): Number {
      return PublicWeatherPageComponent._lat_circle;
    }
    set lat_circle(value: Number) {
      PublicWeatherPageComponent._lat_circle = value;
    }
    get long_circle(): Number {
      return PublicWeatherPageComponent._long_circle;
    }
    set long_circle(value: Number) {
      PublicWeatherPageComponent._long_circle = value;
    }
    get weather_color() {
      return PublicWeatherPageComponent._weather_color;
    }
    set weather_color(value) {
      PublicWeatherPageComponent._weather_color = value;
    }

    get zoneSuscribe(): any[] {
      return PublicWeatherPageComponent._zoneSuscribe;
    }

    set zoneSuscribe(value: any[]) {
      PublicWeatherPageComponent._zoneSuscribe = value;
    }

    //Create the favorite zone view
    getFavoriteZones(email : string){
      this.userService.listFavoriteZones(email);
      alert("Favorite zones: "+this.userService.listFavoriteZones(email));
    }


}
