import { createReducer,on } from "@ngrx/store";
import {incrementCount } from './counter.actions'

const initialState =0;
export const counterReducer=createReducer(
    initialState,
    on(incrementCount,(state)=>state+1)
    );

// export function counterReducer(state=initialState){
//     return state;
// }