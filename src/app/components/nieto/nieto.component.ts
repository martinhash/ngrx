import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../count.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {


  point:number;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('count').subscribe(count=>this.point = count)
  }

  reset(){
    const action = new ResetAction();
    this.store.dispatch(action);
    
  }

}
