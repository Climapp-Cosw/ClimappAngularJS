import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {UserService}from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor() {

  }
  ngOnInit() {

  }

}
