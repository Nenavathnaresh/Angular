import { Component } from '@angular/core';
import { filter, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-basic-operators',
  templateUrl: './basic-operators.component.html',
  styleUrl: './basic-operators.component.css'
})
export class BasicOperatorsComponent {

  observable = of(1, 2, 3, 4, 5, 6, 7, 8)

  ngOnInit() {
    // Normal subscription 
    this.observable.subscribe(number => {
      if (number % 2 == 0) {
        console.log('Normal Even number :', number)
      }
    })


    // Using Pipes

    this.observable.pipe(
      filter((n) => {
        return n % 2 === 0
      }),
      map((n)=>{
        return ('pipe Even number:'+ n)
      })
    ).subscribe((n) => console.log(n))

  }
}
