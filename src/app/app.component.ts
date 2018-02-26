import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './common/auth.service';
import { StompService } from './services/stomp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
    constructor(
       public authService: AuthService,
       public router: Router, public stompService: StompService,
    ) {
        this.stompService.connectSTOMP();
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
