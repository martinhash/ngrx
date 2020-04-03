import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementAction,  DecrementAction} from './components/count.actions';

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

  incrementation(){
    const action = new IncrementAction();
    this.store.dispatch(action)
  }
  
  decrementation(){
    const action = new DecrementAction();
    this.store.dispatch(action)
  }
}
