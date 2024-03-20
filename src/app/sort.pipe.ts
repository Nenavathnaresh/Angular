import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:string[], ...args: unknown[]) {
    return value.sort();
  }

}
