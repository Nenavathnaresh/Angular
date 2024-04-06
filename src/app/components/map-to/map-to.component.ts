import { Component } from '@angular/core';
import { interval, map, mapTo, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrl: './map-to.component.css'
})
export class MapToComponent {

  ngOnInit() {
    of(1, 2, 3, 4, 5).pipe(
      mapTo("Naresh")
    ).subscribe((n) => console.log(n))


    // Higher order observables 

    of(1, 2, 3, 4).pipe(
      map((n) => of(n * 10))
    ).subscribe((data) =>
      data.subscribe((n) =>   // This is not correct way of writing subscription inside a subscription
        console.log(n)))

    // so we need to handle it by using higher order map like mergemap, exhaustmap, switchmap.....

    of(1, 2, 3, 4).pipe(
      map(n => of(n * 10)),
      mergeMap(obeservable => obeservable)
    ).subscribe(data => console.log(data))

    // we can also write it as below bcz mergeMap does the work of map also .....
    of(1, 2, 3, 4).pipe(
      mergeMap(n => of(n * 10)),
    ).subscribe(data => console.log(data))

    // MergeMap will not emit the values in order manner ....
    // concatMap will emit the values in serial order remaining values kept in buffer....
    //exhaustMap will exicute only after previous emiter has completed but remaining values are ignored...
    //tap operator is used to print the values
    //switchmap it ignores all previously emmited values and return last most value

  }


}
