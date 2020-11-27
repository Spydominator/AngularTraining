import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users:string[];
  activeCounter: number = 0;
  constructor(private userService: UserService, private counterService : CounterService){
    this.counterService.activeCounter.subscribe((value) => {
      this.activeCounter++;
  });
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }
  
  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    this.counterService.inactiveCounter.emit();
  }
}
