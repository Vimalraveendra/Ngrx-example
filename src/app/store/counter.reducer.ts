import { createReducer,on } from "@ngrx/store";
import {decrementCount, incrementCount } from './counter.actions'

// import { Action } from "@ngrx/store";
// import { CounterActions, IncrementCount } from "./counter.actions";
// import { CounterActionTypes } from "./counter.type";

const initialState =0;
export const counterReducer=createReducer(
    initialState,
    on(incrementCount,(state,action)=>state+ action.value),
    on(decrementCount,(state,action)=>state-action.value)

    );

// export function counterReducer(state=initialState,action:CounterActions | Action){

//     if(action.type===CounterActionTypes.INCREMENT_COUNTER){
//         return state + ( action as IncrementCount) .value
//     }   
//     return state;
// }