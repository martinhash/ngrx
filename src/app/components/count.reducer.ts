import { Action } from '@ngrx/store';
import { INCREMENTATION, DECREMENTATION } from './count.actions'


export function countReducer(state:number = 10, action: Action){


    switch (action.type){

        case INCREMENTATION:return state+1;
        case DECREMENTATION:return state-1;


        default:return state;


    }



}



