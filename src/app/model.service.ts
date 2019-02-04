import {Injectable} from '@angular/core';
import {Model} from './models/Model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  models: Model[];
  idCounter = 0;

  constructor() {
    let modelBurton = new Model(
      ++this.idCounter, 'Batmobile style Burton', 'Burton');
    let modelNolan = new Model(
      ++this.idCounter, 'Batmobile style Nolan', 'Nolan');
    let modelAffleck = new Model(
      ++this.idCounter, 'Batmobile style Affleck', 'Affleck');
    this.models = [modelBurton, modelNolan, modelAffleck];
  }

  getAll(): Array<Model> {
    return this.models;
  }

  getOne(id: number): Model {
    return this.models.filter(model => model.id === id)[0];
  }

  save(name: string, brand: string): void {
    this.models.push(new Model(++this.idCounter, name, brand));
  }


}
