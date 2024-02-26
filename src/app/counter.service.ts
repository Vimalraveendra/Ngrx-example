import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class CounterService{
    counter:number=0;
    counterChanged=new Subject<number>();

    onIncrement(){
        if(this.counter>=0){
            this.counter++;
            this.counterChanged.next(this.counter)
        }

    }

    onDecrement(){
        if(this.counter>=1){
        this.counter--;
        this.counterChanged.next(this.counter);
        }
    }

}