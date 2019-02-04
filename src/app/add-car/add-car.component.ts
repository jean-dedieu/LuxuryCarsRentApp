import { Component, OnInit } from '@angular/core';
import {Model} from '../models/Model';
import {ModelService} from '../model.service';
import {CarService} from '../car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  registration = '';
  color: 'red' | 'blue' | 'black' = 'black';
  model: Model;
  models: Array<Model>;


  constructor(public ms: ModelService, public cs: CarService) { }

  ngOnInit() {
    this.models = this.ms.getAll();
  }

  save() {
    this.cs.save(this.registration, this.color, this.model);
  }

}
