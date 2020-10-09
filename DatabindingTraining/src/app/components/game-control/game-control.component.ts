import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() buttonStartPressed = new EventEmitter<number>();
  interval: any;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonStartEmit(){
    let i = 0;
    let that = this;
    this.interval = setInterval(function() {
      that.buttonStartPressed.emit(i)
      i++;
    }, 200)

  }

  onButtonStopEmit(){
  
    clearInterval(this.interval);
  }
}
