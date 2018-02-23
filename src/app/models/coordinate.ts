export class Coordinate {
    private _latituded: Number;
    private _longituded: Number;


  constructor(latituded: Number, longituded: Number) {
    this._latituded = latituded;
    this._longituded = longituded;
  }

  get latituded(): Number {
    return this._latituded;
  }

  set latituded(value: Number) {
    this._latituded = value;
  }

  get longituded(): Number {
    return this._longituded;
  }

  set longituded(value: Number) {
    this._longituded = value;
  }
}
