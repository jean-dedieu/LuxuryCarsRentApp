import {Injectable} from '@angular/core';
import {Client} from './models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Array<Client>;
  idCounter = 0;

  constructor() {
    const melissa = new Client(++this.idCounter, 'Lol', 'Melissa', '0707070707');
    const leonard = new Client(++this.idCounter, 'Nard', 'Leo', '0808080808');
    this.clients = [melissa, leonard];
  }

  getOne(id: number): Client {
    return this.clients.filter(client => client.id === id)[0];
  }
}
