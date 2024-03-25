import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count$:Observable<any>

constructor(public store:Store<any>){
  this.count$ = this.store.select(state =>state.count)
  // console.log(this.count$);
  
}

inc(){
  this.store.dispatch(increment())
}

dec(){
  this.store.dispatch(decrement())
}
res(){
  this.store.dispatch(reset())
}
}
