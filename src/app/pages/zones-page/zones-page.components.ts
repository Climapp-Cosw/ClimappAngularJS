import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Zone } from '../../models/zone';
import { ZoneService } from '../../services/zone.service';
import { UserService } from '../../services/user.service';
import { NgbModal,  } from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/user';


@Component({
  selector: 'app-zones-page',
  templateUrl: './zones-page.components.html',
  styleUrls: ['./zones-page.components.css']
})
export class ZonesPageComponent implements OnInit {
    public zones: Zone[] = [];
    public infoModal: string;
    public Fzones: Zone[] = [];
    private user: User;
    constructor (
      public router: Router, public zoneService: ZoneService, public userService: UserService,
      private modalService: NgbModal) {

    }
    ngOnInit() {
        this.user = this.userService.cacheUser;
        this.userService.listFavoriteZones(this.userService.cacheUser.email).subscribe(favoriteZones => {
            this.Fzones = favoriteZones;
        });
        this.zoneService.listZones().subscribe(zonesResponse => {
            this.zones = zonesResponse;
        });
    }
    subscribeZone(id: Number, number: Number, name: string, content) {
        this.userService.addZone( this.user.email, id, number, name).subscribe(serverResponse => {
            this.zoneService.suscribeZone(number, name);
            this.userService.getUserById(this.user.id).subscribe( serverResponse2 =>
              this.userService.cacheUser = serverResponse2
            );
            this.infoModal = 'You have subscribed to ' + name + ' zone.';
            this.modalService.open(content, { windowClass: 'dark-modal' });
            //alert('Se ha adicionado '+name+ 'a tus zonas');
            console.log('Se ha adicionado '+name+ ' a tus zonas');
            this.Fzones = serverResponse;
        }, error => {

            this.infoModal = error.message;
            this.modalService.open(content, { windowClass: 'dark-modal' });
            console.log(error);
            console.log(error.message);
        });
    }

    unsubscribeZone(id: Number, number: Number, name: string, content) {
      this.userService.deleteZone(this.userService.cacheUser.email,id,number,name).subscribe(favoriteZones => {
            this.Fzones = favoriteZones;
        });
      console.log('Se ha eliminado '+name+ ' de tus zonas');
      this.infoModal = 'You have unsubscribed to ' + name + ' zone.';
      this.modalService.open(content, { windowClass: 'dark-modal' });
    }




}

