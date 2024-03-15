import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
tasks:any[] = []
newtask:any

addtask(){
  let taskObj = {
    "title":this.newtask,
    "status":false
  }
  this.tasks.push(taskObj)
}

delete(i:any){
  this.tasks.splice(i,1)
}

done(task:any){
  task.status = true
  console.log(this.tasks);
}

undo(task:any){
  task.status = false
  console.log(this.tasks);
}
}
