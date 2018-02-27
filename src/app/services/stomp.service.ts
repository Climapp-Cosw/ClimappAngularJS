import {Injectable} from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { PublicWeatherPageComponent } from './../pages/publicWeather-page/publicWeather-page.component';
import {Publication} from '../models/publication';

@Injectable()
export class StompService {
  public stompClient;
  public numberZone: Number;
  //private data2: Publication;
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


         let data2 = data.body;
          console.log(data.body);

        /*Dibujar la nueva publicacion*/

        //this.data2.reports.map(function (report) {
        data2.map(function (report) {
          //PublicWeatherPageComponent.drawCircleMap(report);
          alert("ENTRE!!");
        });
      })

      /*FAVORITE ZONE*/
      self.stompClient.subscribe('/topic/zoneSuscribe/' + this.numberZone, function (data) {
        let data1 = JSON.parse(data.body);
        PublicWeatherPageComponent.zoneSuscribe.add({weather: data1.weather, zone: data1.zones.number});
        alert("SUSCRITO A LA ZONA");
      });
    });
  }
}
