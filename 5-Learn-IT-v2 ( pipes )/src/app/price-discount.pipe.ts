import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceDiscount'
})
export class PriceDiscountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args[0] !== undefined)
      return value - args[0];
    else
      return value - 1
  }

}
