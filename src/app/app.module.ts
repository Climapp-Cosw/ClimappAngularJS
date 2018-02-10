import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule}from '@angular/router';
import {ReactiveFormsModule}from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { UserService } from './services/user.service';

const ROUTES = [
{path: 'login', component: LoginPageComponent},
{path: 'register', component: RegisterPageComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
