import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule} from "@agm/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileConfigPageComponent } from './pages/profile-config-page/profile-config-page.component';
import { PublicWeatherPageComponent } from './pages/publicWeather-page/publicWeather-page.component';

import { UserService } from './services/user.service';
import { ReportService } from './services/report.service';

import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';

import { HttpModule } from '@angular/http';
import { AppDataService } from './common/app-data.service';
import { APIService } from './common/api.service';
import { AuthService } from './common/auth.service';



const ROUTES = [
{path: '', component: HomePageComponent},
{path: 'login', component: LoginPageComponent},
{path: 'register', component: RegisterPageComponent},
{path: 'publicWeather', component: PublicWeatherPageComponent, canActivate: [AuthService]},
{path: 'profile', component: ProfileConfigPageComponent, canActivate: [AuthService]},

]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProfileConfigPageComponent,
    PublicWeatherPageComponent,


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
    AppConfiguration,
    AppDataService,
    APIService,
    AuthService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
