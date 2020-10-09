import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  intArray : Array<number> = new Array();

  onStart(counter){
    console.log(counter);
    this.intArray.push(counter);
  }

}
