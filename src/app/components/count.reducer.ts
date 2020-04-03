import { Action } from '@ngrx/store';
import { INCREMENTATION, DECREMENTATION, MULTIPLICATION, DIVISION, RESET } from './count.actions'


export function countReducer(state:number = 10, action: Action){


    switch (action.type){

        case INCREMENTATION:return state+1;
        case DECREMENTATION:return state-1;
        case MULTIPLICATION:return state*2;
        case DIVISION:return state/2;
        case RESET:return 0;


        default:return state;


    }



}



