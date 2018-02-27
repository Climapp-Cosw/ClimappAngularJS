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
    private user: User;
    constructor (
      public router: Router, public zoneService: ZoneService, public userService: UserService,
      private modalService: NgbModal) {
        this.user = userService.cacheUser;
    }

    ngOnInit() {

        this.zoneService.listZones().subscribe(zonesResponse => {
            this.zones = zonesResponse;
        });
    }
    subscribeZone(id: Number, number: Number, name: string, content) {
        this.userService.addZone( this.user.email, id, number, name).subscribe(serverResponse => {
            this.zoneService.suscribeZone(number, name);
            this.infoModal = 'You have subscribed to ' + name + ' zone.';
            this.modalService.open(content, { windowClass: 'dark-modal' });
            //alert('Se ha adicionado '+name+ 'a tus zonas');
            console.log('Se ha adicionado '+name+ ' a tus zonas');
        }, error => {

            this.infoModal = error.message;
            this.modalService.open(content, { windowClass: 'dark-modal' });
            console.log(error);
            console.log(error.message);
        });
    }

}

