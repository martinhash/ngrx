import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { MultiplicateAction, DivisionAction } from '../count.actions';
@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  point:number;

  constructor( private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('count').subscribe(count=>this.point = count)
  }

  multiplication(){
    const action = new MultiplicateAction();
    this.store.dispatch(action);
  }

  division(){
    const action = new DivisionAction();
    this.store.dispatch(action);
  }
  resetPoint( newPoint ){
  }

}
