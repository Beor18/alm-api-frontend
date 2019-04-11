import { Pipe, PipeTransform } from '@angular/core';
import { Hotels } from '../hotel/hotel';

@Pipe({
    name: 'filter'
})
export class CheckedFiltroPipe implements PipeTransform {
  transform(value: Hotels[], filter: any, filterItems: Array<any>, stars: number): any {
    console.log('Filtering ..');
    if (filter && Array.isArray(value) && filterItems) {
      let filterKeys = Object.keys(filter);
      let checkedItems = filterItems.filter(item => { return value.checked; });
      if (!checkedItems || checkedItems.length === 0) { return value; }
      if (stars) {
        return value.filter(item =>
            filterKeys.reduce((acc1, keyName) =>
                (acc1 && checkedItems.reduce((acc2, checkedItem) => acc2 && new RegExp(item[keyName], 'gi').test(checkedItem.value) || checkedItem.value === "", true))
              , true)
              );
      } else {
        return value.filter(item => {
          return filterKeys.some((keyName) => {
            return checkedItems.some((checkedItem) => {
              return new RegExp(item[keyName], 'gi').test(checkedItem.value) || checkedItem.value === "";
            });
          });
        });
      }
    } else {
      return value;
    }
  }
}