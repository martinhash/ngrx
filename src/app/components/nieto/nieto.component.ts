import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() point:number;
  @Output() pointToReset = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    this.point = 0;
    this.pointToReset.emit(0);
  }

}
