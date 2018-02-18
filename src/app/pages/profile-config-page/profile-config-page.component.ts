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
export class ProfileConfigPageComponent implements OnInit {
    public editable: boolean;
    private profileForm: FormGroup;
    private user: User
    constructor(public userService: UserService, public formBuilder: FormBuilder, public router: Router) {

    }

    ngOnInit() {
        this.profileForm = this.formBuilder.group({
            name: '',
            email: '',
        });
    }

    isEditable() {
      return this.editable;
    }

    saveConfig(){
      this.editable=false;
      this.userService.updateUser(
            this.profileForm.get('name').value,
            this.profileForm.get('email').value,
            this.profileForm.get('image').value,
            this.profileForm.get('paswd').value,
        ).subscribe(serverResponse=>{
            this.router.navigate(['/profile']);
        }, error=>{
            console.log(error);
        });
    }
    edit(){
      this.editable=true;
    }


}
