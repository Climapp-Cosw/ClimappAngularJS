import {Injectable} from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { PublicWeatherPageComponent } from './../pages/publicWeather-page/publicWeather-page.component';

@Injectable()
export class StompService {
  public stompClient;
  public numberZone: Number;
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
        let data1 = JSON.parse(data.body);
        /*Dibujar la nueva publicacion*/
        this.data1.reports.map(function (report) {
          PublicWeatherPageComponent.drawCircleMap(report);
        });
      })
      /*FAVORIT ZONE*/
      self.stompClient.subscribe('/topic/zoneSuscribe/' + this.numberZone, function (data) {
        let data1 = JSON.parse(data.body);
        PublicWeatherPageComponent.zoneSuscribe.add({weather: data.weather, zone: data.zones.number});
      });
    });
  }
}
