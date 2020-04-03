import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Input() point:number;
  @Output() pointToChange = new EventEmitter<number>();



  constructor() { }

  ngOnInit(): void {
  }

  multiplication(){
    this.point *= 2; 
    this.pointToChange.emit(this.point);
  }

  division(){
    this.point /= 2; 
    this.pointToChange.emit(this.point);
  }
  resetPoint( newPoint ){
    this.point = newPoint;
    this.pointToChange.emit(this.point);
  }

}
