import {Coordinate} from './coordinate';
import {User} from './user';

export class Report {
    private _dateTimeReport: Date;
  private _coordenate: Coordinate;
  private _img: string;
  private _coment: string;
  private _clima: string;
  private _user: User;


  constructor(dateTimeReport: Date, latLng: Coordinate, img: string, coment: string, clima: string, user: User) {
    this._dateTimeReport = dateTimeReport;
    this._coordenate = latLng;
    this._img = img;
    this._coment = coment;
    this._clima = clima;
    this._user = user;
  }

  get dateTimeReport(): Date {
    return this._dateTimeReport;
  }

  set dateTimeReport(value: Date) {
    this._dateTimeReport = value;
  }

  get coordinate(): Coordinate {
    return this._coordenate;
  }

  set coordinate(value: Coordinate) {
    this._coordenate = value;
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


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
