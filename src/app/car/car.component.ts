import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../models/Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  @Output() carEmitter = new EventEmitter<Car>();

  constructor() {
  }

  ngOnInit() {
  }

  emitCar(): void {
    this.carEmitter.emit(this.car);
  }

}
