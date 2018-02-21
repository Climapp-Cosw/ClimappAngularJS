import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './common/auth.service';
import { UserService }from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat: number =  4.6097100;
  lng: number = -74.0817500;
  
    
  
    constructor(
       public authService: AuthService,
       public router: Router
    ) {
        if (!this.authService.isLoggedIn()) {
             this.router.navigate(['/']);
        }
    }
    
    isLoggedIn() {
      return this.authService.isLoggedIn();
    }

    signOut() {
      this.authService.signOut();
    }
}
