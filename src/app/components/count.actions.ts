import { Action } from '@ngrx/store';

export const INCREMENTATION = '[Count] Incrementation';
export const DECREMENTATION = '[Count] Decrementation';


export class IncrementAction implements Action{
    readonly type = INCREMENTATION;
}


export class DecrementAction implements Action{
    readonly type = DECREMENTATION;
}

