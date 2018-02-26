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

@Component({
  selector: 'app-publicweather-page' ,
  templateUrl: './publicWeather-page.component.html',
  styleUrls: ['./publicWeather-page.component.css']
})
export class PublicWeatherPageComponent implements OnInit {
    public publicWeatherForm: FormGroup;
    public lat: Number = 4.748638;
    public long: Number = -74.030353;
    private report: Report = null;
    private user: User;
    public infoModal: string;
    constructor(public publicationService: PublicationService,
                public userService: UserService, public reportService: ReportService,
                public formBuilder: FormBuilder, public router: Router,
                private modalService: NgbModal) {
       this.user = this.userService.cacheUser;
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
          this.infoModal = 'You registered to new report';
          this.modalService.open(content, { windowClass: 'dark-modal' });
          this.publicationService.findPublication(this.report).subscribe( response2 => {
          }, error2 => {
            console.log('Error publicando ' + error2);
          });
      }, error => {
        this.infoModal = error.message;
        this.modalService.open(content, { windowClass: 'dark-modal' });
        console.log(error);
        console.log(error.message);
      });
    }
    getPublications() {
      this.publicationService.getPublications().subscribe( response => {
              response.map(function(publication) {
                publication.reports.map(function(report) {
                        this.drawCircleMap(report);
                  }
                );
              });
        }, error => {
            console.log( error);
        });
    }
    drawCircleMap(report: Report) {
      /**dibujar en el mapa las cordenadas de la publicaciones, con el color del clima de cada reporte**/
      let clima = report.weather;
      let coordinate = report.coordinate;
    }

}
