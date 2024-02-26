import { createAction } from "@ngrx/store";


export const incrementCount =createAction(
    '[Counter]  IncrementCount'
)

export const decrementCount = createAction(
    '[Counter] decrementCount'
)