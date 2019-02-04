import {Model} from './Model';
import {Rent} from './Rent';

export class Car {
  private _id: number;
  private _registration: string;
  private _color: 'red' | 'black' | 'blue';
  private _rents: Rent[];
  private _model: Model;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    this._registration = value;
  }

  get color(): "red" | "black" | "blue" {
    return this._color;
  }

  set color(value: "red" | "black" | "blue") {
    this._color = value;
  }

  get rents(): Rent[] {
    return this._rents;
  }

  set rents(value: Rent[]) {
    this._rents = value;
  }

  get model(): Model {
    return this._model;
  }

  set model(value: Model) {
    this._model = value;
  }
}
