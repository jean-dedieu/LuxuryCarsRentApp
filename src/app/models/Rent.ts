import {Client} from './Client';

export class Rent {
  private _id: number;
  private _beginning: Date;
  private _end: Date;
  private _client: Client;

  constructor(id: number, beginning: Date, end: Date, client: Client) {
    this._id = id;
    this._beginning = beginning;
    this._end = end;
    this._client = client;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get beginning(): Date {
    return this._beginning;
  }

  set beginning(value: Date) {
    this._beginning = value;
  }

  get end(): Date {
    return this._end;
  }

  set end(value: Date) {
    this._end = value;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }
}
