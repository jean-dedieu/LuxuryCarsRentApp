import { Injectable } from '@angular/core';
import {Model} from './models/Model';
import {Car} from './models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  /*cars: Array<Car>;*/

  constructor(/*public modelService: ModelService*/) {
/*

      // car 1{
      let model1 = new Model('Lamborgini', 'Lamb');
      let car1 = new Cars(1, 'GX214DF', 'blue', [], model1);

      // car 2
      let model2 = new Model ('Dacia', 'Gen Mot');
      let car2 = new Cars(2, 'FG451AS', 'red', [], model2);

      // car 3
      let model3 = new Model('Nissan', 'Quashqai');
      let car3 = new Cars(3, 'ET478AS', 'black', [], model3);

      // car 4
      let model4 = new Model('Hyundai', 'i10');
      let car4 = new Cars(4, 'AQ236SQ', 'red', [], model4);

      this.Cars = [car1, car2, car3, car4];


  }*/
}
}
