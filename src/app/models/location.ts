 export class Rent {
  private _id: number;
  private _dateBegin: Date;
  private _dateFinish: Date;


  constructor(id: number, dateBegin: Date, dateFinish: Date) {
    this._id = id;
    this._dateBegin = dateBegin;
    this._dateFinish = dateFinish;
  }


  public get id(): number {
    return this._id;
  }


  public set id(value: number) {
    this._id = value;
  }


  public get dateBegin(): Date {
    return this._dateBegin;
  }

  public set dateBegin(value: Date) {
    this._dateBegin = value;
  }

  public get dateFinish(): Date {
    return this._dateFinish;
  }


  public set dateFinish(value: Date) {
    this._dateFinish = value;
  }


}
