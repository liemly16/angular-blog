import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args?: any) {
    value  = value.substring(0, 60) + '...';

    return value;
  }

}
