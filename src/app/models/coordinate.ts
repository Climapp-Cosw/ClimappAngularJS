export class Coordinate {
    private _id: Number;
    private _latitude: Number;
    private _longitude: Number;


  constructor(latitude: Number, longitude: Number) {
    this._latitude = latitude;
    this._longitude = longitude;
  }

  get latitude(): Number {
    return this._latitude;
  }

  set latitude(value: Number) {
    this._latitude = value;
  }

  get longitude(): Number {
    return this._longitude;
  }

  set longitude(value: Number) {
    this._longitude = value;
  }


  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }
}
