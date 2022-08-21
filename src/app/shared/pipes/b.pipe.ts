import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'b'
})
export class BPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
