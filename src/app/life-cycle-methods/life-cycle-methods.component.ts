import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-methods',
  templateUrl: './life-cycle-methods.component.html',
  styleUrl: './life-cycle-methods.component.css'
})
export class LifeCycleMethodsComponent {

  @Input() x:any;
  constructor(){
    console.log('"Lifecycle component constructore called');
   }  //called only at the time of mounting
  ngOnInit(){
    console.log('"Lifecycle component ngOnInit called');
  } //called only at the time of mounting
  ngOnChanges(){
    console.log('"Lifecycle component ngOnChanges called');
  }
  ngDoCheck(){
    console.log('"Lifecycle component ngDocheck called');
  }  // calls for every small change in the component
  ngViewInit(){
    console.log('"Lifecycle component ngViewInit called');
  }
  ngContentInit(){
    console.log('"Lifecycle component ngContentInit called');
  }
  ngViewChecked(){
    console.log('"Lifecycle component ngViewChecked called');
  }
  ngContentChecked(){
    console.log('"Lifecycle component ngContentChecked called');
  }
  ngOnDestroy(){
    console.log('"Lifecycle component ngOnDestroy called');
  }
}
