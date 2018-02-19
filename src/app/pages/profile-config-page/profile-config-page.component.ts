import{Component , OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {UserService}from '../../services/user.service';
import {User} from '../../models/user';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-config-page',
  templateUrl: './profile-config-page.component.html',
  styleUrls: ['./profile-config-page.component.css']
})
export class ProfileConfigPageComponent implements OnInit{
    public editable: boolean;
    public profileForm: FormGroup;
    public user: User;
    constructor(public userService: UserService, public formBuilder: FormBuilder, public router: Router) {
        this.userService.getUEmail().subscribe(serverResponse=>{
            this.user=serverResponse;
        });
    }

    ngOnInit() {
        this.userService.getUEmail().subscribe(serverResponse=>{
            this.user=serverResponse;
        });
        this.profileForm = this.formBuilder.group({
            nameedit : '',
            emailedit : '',
            image : '',
            paswd : '',
        });
    }

    isEditable() {
      return this.editable;
    }

    saveConfig(){
      this.editable=false;
      this.userService.updateUser(
            this.profileForm.get('nameedit').value,
            this.profileForm.get('emailedit').value,
            this.profileForm.get('image').value,
            this.profileForm.get('paswd').value,

        ).subscribe(serverResponse=>{
            this.userService.setEmail(this.profileForm.get('emailedit').value)

            this.router.navigate(['/profile']);

        }, error=>{
            console.log(error);
        });
    }
    edit(){
      this.editable=true;
    }



}
