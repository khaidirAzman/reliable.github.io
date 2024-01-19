import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsername',
  standalone: true
})
export class FilterUsernamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let tempEmployee: any[];
    let filterValue: string = args[0];
    tempEmployee = value.filter((emp: { username: string; }) => {
      let upper = emp.username.toLowerCase();
      return upper.indexOf(filterValue.toLowerCase()) >= 0;
    });
    return tempEmployee;
  }

}
