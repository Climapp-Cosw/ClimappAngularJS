import { User } from '../../models/user';
import { PublicWeather } from '../../models/publicWeather';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserService }from '../../services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'puclicWeather-page',
  templateUrl: './puclicWeather-page.component.html',
  styleUrls: ['./puclicWeather-page.component.css']
})
export class PuclicWeatherPageComponent implements OnInit {
    public puclicWeatherForm: FormGroup;
    public error : string;
    constructor(public userService: UserService, public formBuilder: FormBuilder, public router: Router) {

    }

    ngOnInit() {
        
    }

    routeToHome(){
        this.router.navigate(['/']);
    }

   

}
