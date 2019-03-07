import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from '../models/hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryServiceService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      {age: 27, name: 'vicky'},
      {age: 30, name: 'nicky'}
    ];
    return {heroes};
  }

  getAge(heroes: Hero[]): number {
      return heroes.length > 0 ? 11 : 12;
  }
}
