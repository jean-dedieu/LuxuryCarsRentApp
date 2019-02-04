import {Component, OnInit} from '@angular/core';
import {Car} from '../models/Car';
import {Model} from '../models/Model';
import {CarService} from '../car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];

  constructor(private cs: CarService,
              private router: Router) {
  }

  ngOnInit() {
    this.cars = this.cs.getAll();
  }

  navigateToDetail(car: Car): void {
    this.router.navigate(['car-detail', car.id])
  }


}
