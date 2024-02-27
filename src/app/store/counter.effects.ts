import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, tap, withLatestFrom ,of} from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';

import { decrementCount, incrementCount, init,set } from "./counter.actions";

import { selectCount } from "./counter.selectors";

@Injectable()
export class CounterEffects{

    loadCount = createEffect(()=>this.actions$.pipe(
        ofType(init),
        switchMap(()=>{
            const storedCounter = localStorage.getItem('count')
            console.log("stored",storedCounter)
            if(selectCount){
                return  of (set({value:+storedCounter}))
            }
            return  of (set({value:0}))
        })
    )
    )

    saveCount=createEffect(()=>this.actions$.pipe(
       ofType(incrementCount,decrementCount),
       withLatestFrom(this.store.select(selectCount)),
       tap(([action,counter])=>{
        console.log('action',action)
        localStorage.setItem('count',counter.toString())
       })
    ),{dispatch:false}
    )
    // @Effect({dispatch:false})
    // saveCount=(()=>this.actions$.pipe(
    //     ofType(incrementCount,decrementCount),
    //     tap((action)=>{
    //      console.log('action',action)
    //      localStorage.setItem('count',action.value.toString())
    //     })
    //  )
    //  )
    constructor(private actions$:Actions ,private store:Store<{counter:number}>){}
}