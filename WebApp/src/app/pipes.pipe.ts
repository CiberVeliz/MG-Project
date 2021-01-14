import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, name: any): any {
    if(name === '')
    {
      return value;
    }
    
    const results = [];

    for(const p of value)
    {
      if(p.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
      {
        results.push(p);
      }
    }

    return results;
  }

}
