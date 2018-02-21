import{Component , OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {Zones} from '../../models/zones';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-zones-page',
  templateUrl: './zones-page.components.html',
  styleUrls: ['./zones-page.components.css']
})
export class ZonesPageComponent implements OnInit{

    constructor( public formBuilder: FormBuilder, public router: Router) {

    }

    ngOnInit() {

    }





}

