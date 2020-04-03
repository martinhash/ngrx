import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementAction,  DecrementAction} from './components/count.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minigame';
  point:number;
  constructor( private store:Store<AppState> ){
    this.store.select('count').subscribe( count => this.point = count)
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
