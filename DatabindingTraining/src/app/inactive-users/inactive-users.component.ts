import { Component, EventEmitter, Input, Output, Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];
  inactiveCounter : number = 0;
  constructor(private userService: UserService, private counterService : CounterService){
    this.counterService.inactiveCounter.subscribe((value) => {
      this.inactiveCounter ++;
  });
  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  
  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.counterService.activeCounter.emit();
  }
}
