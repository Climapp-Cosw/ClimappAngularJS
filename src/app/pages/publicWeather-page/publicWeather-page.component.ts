import { Publication} from '../../models/publication';
import { Component, OnInit, AfterContentInit } from '@angular/core';
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
    constructor(public publicationService: PublicationService,
                public userService: UserService, public reportService: ReportService,
                public formBuilder: FormBuilder, public router: Router) {
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

    sendReport( clima: string) {
      // Latitud:4.748638
      // Longitud:-74.030353
      this.reportService.registerReport(
        new Date(), new Coordinate( this.lat, this.long), 'assets/img/' + clima + '.png',
         'comment', 'clima', this.user
      ).subscribe(response => {
          this.report = response;
          this.publicationService.findPublication(this.report).subscribe( response2 => {
          }, error2 => {
            console.log(error2);
          });
      }, error => {
        console.log(error);
      });
    }

}
