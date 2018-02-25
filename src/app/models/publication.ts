import {Report} from './report';
import {Zone} from './zone';

export class Publication {
    private _zone: Zone;
    private _reports: Report[] = [];
    private _id: Number;


  constructor(zone: Zone, reports: Report[], id: Number) {
    this._zone = zone;
    this._reports = reports;
    this._id = id;
  }

  get zone(): Zone {
    return this._zone;
  }

  set zone(value: Zone) {
    this._zone = value;
  }

  get reports(): Report[] {
    return this._reports;
  }

  set reports(value: Report[]) {
    this._reports = value;
  }

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }
}
