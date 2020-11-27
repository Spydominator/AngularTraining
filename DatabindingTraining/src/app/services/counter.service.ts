import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public activeCounter = new EventEmitter();
  public inactiveCounter = new EventEmitter();
  constructor() { }

  getActiveCounter() {
    return this.activeCounter;
  }
}
