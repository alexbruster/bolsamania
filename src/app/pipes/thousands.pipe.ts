import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousands'
})
export class ThousandsPipe implements PipeTransform {

  transform(value: number): any {
    if(value >= 1000) {
      let thousand = (value/1000).toFixed(0);
      return thousand.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " M";
    } else {
      return value;
    }
  }

}
