import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter((val : any)=>{
      return val.productName.toLowerCase().includes(args[0].toLowerCase())
    });
  }

}
