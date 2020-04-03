import { Action } from '@ngrx/store';
import { INCREMENTATION, DECREMENTATION, MULTIPLICATION, DIVISION } from './count.actions'


export function countReducer(state:number = 10, action: Action){


    switch (action.type){

        case INCREMENTATION:return state+1;
        case DECREMENTATION:return state-1;
        case MULTIPLICATION:return state*2;
        case DIVISION:return state/2;


        default:return state;


    }



}



