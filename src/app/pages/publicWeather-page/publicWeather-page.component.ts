import { PublicWeather } from '../../models/publicWeather';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserService } from '../../services/user.service';

import { AgmCoreModule } from '@agm/core';
import {ReportService} from '../../services/report.service';
import {Coordinate} from '../../models/coordinate';
import {PublicationService} from '../../services/publication.service';
import {Report} from '../../models/report';

@Component({
  selector: 'app-publicweather-page' ,
  templateUrl: './publicWeather-page.component.html',
  styleUrls: ['./publicWeather-page.component.css']
})
export class PublicWeatherPageComponent implements OnInit {
    public publicWeatherForm: FormGroup;
    public lat: Number;
    public lng: Number;
    private report;
    constructor(public publicationService: PublicationService,
                public userService: UserService, public reportService: ReportService,
                public formBuilder: FormBuilder, public router: Router) {
    }

    ngOnInit() {
      this.publicWeatherForm = this.formBuilder.group({
        idRegionesFavoritas : '',
      });
    }

    routeToHome() {
        this.router.navigate(['/']);
    }

    sendReport(clima: string) {
      // Latitud:4.748638
      // Longitud:-74.030353
      console.log(this.lat + ' ' + this.lng);
      this.reportService.registerReport(
        new Date(), new Coordinate( -74.030353, 4.748638), 'img/' + clima,
         'comment', 'clima', this.userService.cacheUser
      ).subscribe(response => {
          this.report = response;
          this.publicationService.findPublication(this.report);
      });

    }



}
