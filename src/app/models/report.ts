import {Coordinate} from './coordinate';
import {User} from './user';
import {Zone} from './zone';

export class Report {
  private _id: Number;
  private _dateTimeReport: Date;
  private _coordinate: Coordinate;
  private _img: string;
  private _comment: string;
  private _weather: string;
  private _user: User;
  private _zone: Zone;


  constructor(dateTimeReport: Date, latLng: Coordinate, img: string, comment: string, weather: string, user: User) {
    this._dateTimeReport = dateTimeReport;
    this._coordinate = latLng;
    this._img = img;
    this._comment = comment;
    this._weather = weather;
    this._user = user;
  }

  get dateTimeReport(): Date {
    return this._dateTimeReport;
  }

  set dateTimeReport(value: Date) {
    this._dateTimeReport = value;
  }

  get coordinate(): Coordinate {
    return this._coordinate;
  }

  set coordinate(value: Coordinate) {
    this._coordinate = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get weather(): string {
    return this._weather;
  }

  set weather(value: string) {
    this._weather = value;
  }

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get zone(): Zone {
    return this._zone;
  }

  set zone(value: Zone) {
    this._zone = value;
  }
}
