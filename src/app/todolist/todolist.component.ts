import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo } from '../todolist.action';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
todos$:Observable<any>
newtodo:any;

constructor(public store:Store<any>){
  this.todos$ = this.store.select(state=>state.todos)
}

  addtodo(){
    this.store.dispatch(addTodo({newtodoitem:this.newtodo}))
  }
}
