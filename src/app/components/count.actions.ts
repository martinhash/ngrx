import { Action } from '@ngrx/store';

export const INCREMENTATION = '[Count] Incrementation';
export const DECREMENTATION = '[Count] Decrementation';
export const MULTIPLICATION = '[Count] Multiplication';
export const DIVISION = '[Count] Division';
export const RESET = '[Count] Reset';


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

export class ResetAction implements Action{
    readonly type = RESET;
}

export type actions =   IncrementAction     |
                        DecrementAction     |
                        MultiplicateAction  |
                        DivisionAction      |
                        ResetAction
