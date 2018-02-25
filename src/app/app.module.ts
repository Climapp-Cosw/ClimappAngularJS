import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule} from "@agm/core";
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileConfigPageComponent } from './pages/profile-config-page/profile-config-page.component';

import { PublicWeatherPageComponent } from './pages/publicWeather-page/publicWeather-page.component';
import { ZonesPageComponent} from './pages/zones-page/zones-page.components';

import { ReportService } from './services/report.service';
import { UserService } from './services/user.service';
import { ZoneService } from './services/zone.service';


import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';

import { HttpModule } from '@angular/http';
import { AppDataService } from './common/app-data.service';
import { APIService } from './common/api.service';
import { AuthService } from './common/auth.service';
import {PublicationService} from './services/publication.service';

//LIBRERIAS STOMP
import { Component, OnInit } from '@angular/core';
import { StompService } from './services/stomp.service';







const ROUTES = [
{path: '', component: HomePageComponent},
{path: 'login', component: LoginPageComponent},
{path: 'register', component: RegisterPageComponent},
{path: 'publicWeather', component: PublicWeatherPageComponent, canActivate: [AuthService]},
{path: 'profile', component: ProfileConfigPageComponent, canActivate: [AuthService]},
{path: 'zones', component: ZonesPageComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProfileConfigPageComponent,
    PublicWeatherPageComponent,
    ZonesPageComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6yCprhpqUqKmDwQcn6rWOc_TIk3s60-c'
    })
  ],
  providers: [
    {
        provide: INITIAL_CONFIG,
        useValue: {
        apiURL: 'http://localhost:8080'
        }
    },
    UserService,
    ReportService,
    ZoneService,
    PublicationService,
    ReportService,
    AppConfiguration,
    AppDataService,
    APIService,
    AuthService,
    ZoneService,
    StompService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
