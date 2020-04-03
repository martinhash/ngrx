import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minigame';
  point:number;
  constructor(){
    this.point = 10;
  }

  inc(){
    this.point = this.point + 1;
  }
  
  dec(){
    this.point = this.point - 1;
  }
}
