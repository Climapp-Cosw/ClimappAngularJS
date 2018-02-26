import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {ZoneService} from './zone.service';

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
      self.stompClient.subscribe('/topic/reportWeather', function(data) {
        let data1 = JSON.parse(data.body);
        /*Dibujar la nueva publicacion*/
        data1.reports.map(function (report) {
          this.drawCircleMap(report);
        });
        console.log('probandoooooooodosbhgfdaindfd stomp');
      }),
        /*FAVORIT ZONE*/
        self.stompClient.subscribe('/topic/zoneSuscribe/' + this.numberZone, function(data) {
          let data1 = JSON.parse(data.body);
          console.log('probandoooooooodosbhgfdaindfd stomp2');
          /*BUSCAR PUBLICACIONES DE ESA ZONA Y MOSTRAR EL CLIMA EN EL CUADRO*/

        });
    }
  ); }


}
