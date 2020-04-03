import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState{
  count:number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minigame';
  point:number;
  constructor( private store:Store<AppState> ){
    this.store.subscribe(state =>{
      this.point = state.count;
    })
  }

  inc(){
    const action:Action = {
      type:'INCREMENTATION'
    };
    this.store.dispatch(action)
  }
  
  dec(){
    const action:Action = {
      type:'DECREMENTATION'
    };
    this.store.dispatch(action)
  }
}
