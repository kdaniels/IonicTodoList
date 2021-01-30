import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customComplete'
})
export class CustomCompletePipe implements PipeTransform {

  transform(input: boolean): any {
    const complete = true;
    
    if (input == complete) {
      return 'Completed';
    } else {
      return 'In Progress'
    }

  }

}
