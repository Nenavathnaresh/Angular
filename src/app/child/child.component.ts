import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() fn:any;

@Output() pfn = new EventEmitter();
inp:any;
constructor(){}
xyz(){
  this.pfn.emit(this.inp);
}
}
