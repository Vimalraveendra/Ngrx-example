import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent  implements  OnInit, OnDestroy{
  counter = 0;
  private counterSub:Subscription;
  constructor(private counterService:CounterService){}

  ngOnInit(){
     this.counterSub= this.counterService.counterChanged.subscribe((newValue)=>{
          this.counter=newValue;
      })
  }
  ngOnDestroy(): void {
      this.counterSub.unsubscribe();
  }

}
