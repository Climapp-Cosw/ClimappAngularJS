import {Coordenate} from './coordenate';
import {User} from './user';

export class Report{
    private _dateTimeReport: Date;
  private _latLng: Coordenate;
  private _img: string;
  private _coment: string;
  private _clima: string;
  private _ratio: Number;
  private _user: User;


  constructor(dateTimeReport: Date, latLng: Coordenate, img: string, coment: string, clima: string, ratio: Number, user: User) {
    this._dateTimeReport = dateTimeReport;
    this._latLng = latLng;
    this._img = img;
    this._coment = coment;
    this._clima = clima;
    this._ratio = ratio;
    this._user = user;
  }

  get dateTimeReport(): Date {
    return this._dateTimeReport;
  }

  set dateTimeReport(value: Date) {
    this._dateTimeReport = value;
  }

  get latLng(): Coordenate {
    return this._latLng;
  }

  set latLng(value: Coordenate) {
    this._latLng = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get coment(): string {
    return this._coment;
  }

  set coment(value: string) {
    this._coment = value;
  }

  get clima(): string {
    return this._clima;
  }

  set clima(value: string) {
    this._clima = value;
  }

  get ratio(): Number {
    return this._ratio;
  }

  set ratio(value: Number) {
    this._ratio = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
