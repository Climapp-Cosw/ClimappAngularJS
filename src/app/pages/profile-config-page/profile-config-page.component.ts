import {Component , OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import {CacheService} from "ng2-cache/src/services/cache.service";

@Component({
  selector: 'app-profile-config-page',
  templateUrl: './profile-config-page.component.html',
  styleUrls: ['./profile-config-page.component.css']
})
export class ProfileConfigPageComponent implements OnInit{
    public editable: boolean;
    public profileForm: FormGroup;
    public profileError: string;
    public username: '';
    public useremail: '';
    public userimage: '';
    public userpass: '';
    private user;
    constructor(public userService: UserService, public formBuilder: FormBuilder, public router: Router) {
        this.userGet();
    }

    ngOnInit() {
        this.profileForm = this.formBuilder.group({
            name: '',
            email: '',
            image: '',
            password: '',
        });
    }

    isEditable() {
      return this.editable;
    }
    routeToProfile () {
      this.userGet();

    }
    routeToHome () {
      this.editable = false;
      this.router.navigate(['/']);
    }

    private userGet(){
      this.editable = false;
      this.userService.getUserById(this.userService.cacheUser.id()).subscribe(serverResponse => {
        this.username = serverResponse.name;
        this.useremail = serverResponse.email;
        this.userimage = serverResponse.image;
        this.userpass = serverResponse.password;
      });
    }
    saveConfig() {
      this.userService.updateUser(
            this.profileForm.get('name').value,
            this.profileForm.get('email').value,
            this.profileForm.get('image').value,
            this.profileForm.get('password').value,
        ).subscribe(serverResponse => {
            this.userGet();
        }, error => {
            this.profileError = (error && error.message ? error.message : '');
        });
    }
    edit() {
      this.editable = true;
    }



}
