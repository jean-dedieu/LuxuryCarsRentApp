import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../car.service';
import {Car} from '../models/Car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: Car;

  constructor(private ac: ActivatedRoute,
              private cs: CarService) {
  }

  ngOnInit() {
    let id = parseInt(this.ac.snapshot.paramMap.get('id'), 10);
    this.car = this.cs.getOne(id);
    console.log(this.car);
  }

}
