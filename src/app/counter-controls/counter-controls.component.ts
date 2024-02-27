import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementCount,decrementCount } from '../store/counter.actions';


@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css']
})
export class CounterControlsComponent {
  constructor(private store:Store){}

  increment(){
   this.store.dispatch(incrementCount({value:4}))
  // this.store.dispatch(new IncrementCount(4))
  }
  decrement(){
   this.store.dispatch(decrementCount({value:2}))
  // this.store.dispatch(new DecrementCount())
  }


}
