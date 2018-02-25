import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './common/auth.service';
import { UserService }from './services/user.service';
import { User } from './models/user';
import { StompService } from './services/stomp.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StompService]
})
export class AppComponent {
  title = 'app';
  lat: number =  4.6097100;
  lng: number = -74.0817500;
  public inputField = 'CONNECTED';

 public serverResponse: string;


    constructor(private _stompService: StompService,
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

public ngOnInit(): void {
    this._stompService.connect('ws://localhost:8080/stompTest');
    this._stompService.getObservable().subscribe(payload => {
      this.serverResponse = payload.outputField;
    });
  }

  public send(): void {
    this._stompService.send(this.inputField);
  }
}
