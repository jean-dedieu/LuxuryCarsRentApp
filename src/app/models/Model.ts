export class Model {
  private _id: number;
  private _name: string;
  private _brand: string;

  constructor(id: number, name: string, brand: string) {
    this._id = id;
    this._name = name;
    this._brand = brand;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }
}
