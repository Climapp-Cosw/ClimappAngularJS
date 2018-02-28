import {Injectable} from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { PublicWeatherPageComponent } from './../pages/publicWeather-page/publicWeather-page.component';
import {Observable} from 'rxjs/Observable';
import {Publication} from '../models/publication';

@Injectable()
export class StompService {
  public stompClient;
  public numberZone: Number;
  public example = [];
  constructor() {
  }
  connectSTOMP() {
    console.log('Connecting to WS...');
    const socket = new SockJS('/stompendpoint');
    this.stompClient = Stomp.over(socket);
    const self = this;

    this.stompClient.connect({}, function(frame) {
      console.log('Connected: ' + frame);

      /*PUBLIC ZONE*/
      self.stompClient.subscribe('/topic/reportWeather', function (data) {

          /*Dibujar la nueva publicacion*/
          let lat: Publication;
          lat = JSON.parse(data.body);
          lat.reports.map(function (report) {
            PublicWeatherPageComponent.drawCircleMap(report);
        });
      })

      /*FAVORITE ZONE*/
      self.stompClient.subscribe('/topic/zoneSuscribe/' + this.numberZone, function (data) {
        let data1: Publication;
        data1 = JSON.parse(data.body);
        console.log("stomp "+ data1.zone.name);
        PublicWeatherPageComponent.add({weather: data1.reports[1].weather, zone: data1.zone.number});
        this.example.push({idzone: data1.zone.number,climas: [data1.reports[1].weather]});

      });
    });
  }
}
