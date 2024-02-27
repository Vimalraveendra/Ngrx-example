import { createAction, props } from "@ngrx/store";
import { CounterActionTypes } from "./counter.types";


export const init =createAction(
    CounterActionTypes.INIT_LOCAL_STORAGE
)
export const set = createAction(
    CounterActionTypes.SET_LOCAL_STORAGE,
    props<{value:number}>()
)
export const incrementCount =createAction(
    CounterActionTypes.INCREMENT_COUNTER,
    props<{value:number}>()
)

export const decrementCount = createAction(
    CounterActionTypes.DECREMENT_COUNTER,
    props<{value:number}>()
)


// export class IncrementCount implements Action{
//     readonly type:string=CounterActionTypes.INCREMENT_COUNTER;
//     constructor(public value:number){}
// }

// export class DecrementCount implements Action{
//     readonly type:string = CounterActionTypes.DECREMENT_COUNTER
//     constructor(public value:0){}
// }


// export  type CounterActions = IncrementCount |DecrementCount