import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'futureDate'})
export class FutureDatePipe implements PipeTransform {

  transform(value: string): string {
    let date = new Date(value)
    date.setDate(date.getDate() + 6)
    return date.toString()
  }

}