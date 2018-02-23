import {Report} from './report';

export class User {
    private _id: Number;
    private _name: string;
    private _email: string;
    private _image: string;
    private _password: string;
    private _confirmPassword: string;
    private  _reports: Report [] = [];

    constructor(id: Number, name: string, email: string, image: string,  password: string, confirmPassword: string) {
        this._name = name;
        this._email = email;
        this._image = image;
        this._password = password;
        this._confirmPassword = confirmPassword;
        this._id = id;

    }


    get id(): Number {
      return this._id;
    }

    set id(value: Number) {
      this._id = value;
    }

  get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
    get email(): string {
      return this._email;
    }
    set email(value: string) {
      this._email = value;
    }
    get image(): string {
      return this._image;
    }
    set image(value: string) {
      this._image = value;
    }
    get password(): string {
      return this._password;
    }
    set password(value: string) {
      this._password = value;
    }
    get confirmPassword(): string {
      return this._confirmPassword;
    }
    set confirmPassword(value: string) {
      this._confirmPassword = value;
    }

  get reports(): any {
    return this._reports;
  }

  set reports(value: any) {
    this._reports = value;
  }
}
