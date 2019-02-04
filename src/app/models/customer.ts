export class Customer {
  private _id: number;
  private _name: string;
  private _lastName: string;
  private _tel: string;


  constructor(id: number, name: string, lastName: string, tel: string) {
    this._id = id;
    this._name = name;
    this._lastName = lastName;
    this._tel = tel;
  }

  // Getter + Setter id
  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  // Getter + Setter name
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  // Getter + Setter lastName
  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  // Getter + Setter tel
  public get tel(): string {
    return this._tel;
  }

  public set tel(value: string) {
    this._tel = value;
  }

}
