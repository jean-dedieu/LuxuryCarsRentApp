export class Client {
  private _id: number;
  private _lastname: string;
  private _name: string;
  private _phoneNumber: string;

  constructor(id: number, lastname: string, name: string, phoneNumber: string) {
    this._id = id;
    this._lastname = lastname;
    this._name = name;
    this._phoneNumber = phoneNumber;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
}
