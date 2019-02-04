import {Injectable} from '@angular/core';
import {Rent} from './models/Rent';
import {ClientService} from './client.service';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  rents: Rent[] = [];
  idCounter = 0;

  constructor(private clientService: ClientService) {
    this.rents.push(new Rent(++this.idCounter, new Date(2018, 4, 2), new Date(2018, 5, 1), this.clientService.getOne(1)));
    this.rents.push(new Rent(++this.idCounter, new Date(2018, 6, 6), new Date(2018, 7, 7), this.clientService.getOne(2)));
    this.rents.push(new Rent(++this.idCounter, new Date(2018, 8, 8), new Date(2018, 9, 9), this.clientService.getOne(3)));
  }

  getOne(id: number): Rent {
    return this.rents.filter(rent => rent.id === id)[0];
  }
}
