import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(input: string): any {
    const date = new Date(input);
    const message = "Due "

    const today = new Date();
    const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    const week = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000));
    const month = new Date(today.getTime() + (29 * 7 * 24 * 60 * 60 * 1000));

    if (date <= today) {
      return message + 'Today';  
    } else if (date <= tomorrow) {
      return message + 'Tomorrow';
    } else if (date <= week) {
      return message + 'Next Week';
    } else if (date <= month) {
      return message + 'Next Month';
    } else {
      return message + 'Over Month';
    }
  }

}
