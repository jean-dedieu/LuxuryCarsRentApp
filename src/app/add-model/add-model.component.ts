import {Component, OnInit} from '@angular/core';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  name: string = '';
  brand: string = '';

  constructor(private modelService: ModelService) {
  }

  ngOnInit() {
  }

  save(): void {
    this.modelService.save(this.name, this.brand);
  }



}
