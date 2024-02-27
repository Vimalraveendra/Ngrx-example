import { Component, } from '@angular/core';

import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  // counter = 0;
  // private counterSub:Subscription;
  count$:Observable<number>;
  doubleCount$:Observable<number>
  constructor(private store:Store<{counter:number}>){
    // this.count$=store.select('counter')
    this.count$=store.select(selectCount)
    this.doubleCount$ = store.select(selectDoubleCount)
  }
  // constructor(private counterService:CounterService){}

  // ngOnInit(){
  //    this.counterSub= this.counterService.counterChanged.subscribe((newValue)=>{
  //         this.counter=newValue;
  //     })
  // }
  // ngOnDestroy(): void {
  //     this.counterSub.unsubscribe();
  // }

}
