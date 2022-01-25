import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colors'
})
export class ColorsPipe implements PipeTransform {

  transform(value: number): string {
    if(value >= 0) {
      return 'green'
    }
    return 'red'
  }

}
