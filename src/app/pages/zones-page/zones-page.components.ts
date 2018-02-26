import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Zone } from '../../models/zone';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ZoneService } from '../../services/zone.service';
import { UserService } from '../../services/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-zones-page',
  templateUrl: './zones-page.components.html',
  styleUrls: ['./zones-page.components.css']
})
export class ZonesPageComponent implements OnInit {
    public zones: Zone[] = [];
    public infoModal: string;
    constructor (
      public formBuilder: FormBuilder,
      public router: Router,
      public zoneService: ZoneService,
      public userService: UserService,
        private modalService: NgbModal) {

    }

    ngOnInit() {

        this.zoneService.listZones().subscribe(zonesResponse => {
            this.zones = zonesResponse;
        });
    }
    subscribeZone(id: Number, number: Number, name: string, content) {
        this.userService.addZone('prueba@mail.com', id, number, name).subscribe(serverResponse => {
            this.infoModal = 'You have subscribed to ' + name + ' zone.';
            this.modalService.open(content, { windowClass: 'dark-modal' });
            console.log('Se ha adicionado');
        }, error => {

            this.infoModal = error.message;
            this.modalService.open(content, { windowClass: 'dark-modal' });
            console.log(error);
            console.log(error.message);
        });
    }
}

