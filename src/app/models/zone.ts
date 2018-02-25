export class Zone {
    private _name: string;
    private _number: Number;
    private _id: Number;
    private _coordinates: Coordinates[] = [];

    constructor(name: string, number: Number, id: Number) {
        this._name = name;
        this._number = number;
        this._id = id;
    }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get number(): Number {
    return this._number;
  }

  set number(value: Number) {
    this._number = value;
  }

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get coordinates(): Coordinates[] {
    return this._coordinates;
  }

  set coordinates(value: Coordinates[]) {
    this._coordinates = value;
  }
}

