import {Injectable} from '@angular/core';
import {ModelService} from './model.service';
import {Car} from './models/Car';
import {RentService} from './rent.service';
import {Model} from './models/Model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  idCounter = 0;
  cars: Array<Car> = [];

  constructor(public modelService: ModelService, public rentService: RentService) {
    let batmobileB = new Car();
    batmobileB.id = ++this.idCounter;
    batmobileB.model = this.modelService.getOne(1);
    batmobileB.color = 'red';
    batmobileB.registration = 'ZX BRUCE 32';
    batmobileB.rents = [this.rentService.getOne(2), this.rentService.getOne(2)];

    let batmobileN = new Car();
    batmobileN.id = ++this.idCounter;
    batmobileN.model = this.modelService.getOne(2);
    batmobileN.color = 'black';
    batmobileN.registration = 'ZX BRUCE 33';
    batmobileN.rents = [this.rentService.getOne(3)];

    let batmobileA = new Car();
    batmobileA.id = ++this.idCounter;
    batmobileA.model = this.modelService.getOne(2);
    batmobileA.color = 'blue';
    batmobileA.registration = 'ZX BRUCE 34';
    batmobileA.rents = [];

    this.cars.push(batmobileB, batmobileA, batmobileN, batmobileN, batmobileB, batmobileA);
  }

  getAll(): Car[] {
    return this.cars;
  }

  getOne(id: number): Car {
    return this.cars.filter(car => car.id === id)[0];
  }

  save(registration: string, color: 'red' | 'blue' | 'black', model:Model): void{
    let carToSave = new Car();
    carToSave.id = ++this.idCounter;
    carToSave.registration = registration;
    carToSave.model = model;
    carToSave.color = color;
    carToSave.rents = []; // Une nouvelle voiture ne possède pas de location, je lui donne un tableau vide
    this.cars.push(carToSave);
  }
}
