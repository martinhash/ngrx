import { Action } from '@ngrx/store';

export const INCREMENTATION = '[Count] Incrementation';
export const DECREMENTATION = '[Count] Decrementation';
export const MULTIPLICATION = '[Count] Multiplication';
export const DIVISION = '[Count] Division';


export class IncrementAction implements Action{
    readonly type = INCREMENTATION;
}


export class DecrementAction implements Action{
    readonly type = DECREMENTATION;
}

export class MultiplicateAction implements Action{
    readonly type = MULTIPLICATION;
}


export class DivisionAction implements Action{
    readonly type = DIVISION;
}

