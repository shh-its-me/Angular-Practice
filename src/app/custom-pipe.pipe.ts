import { Pipe, PipeTransform } from '@angular/core';
import { ProductSchema } from './product';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: ProductSchema[], ...args: any[]): ProductSchema[] {
    // return ;
    if(args.length === 0) {
      return value;
    }
    return value.filter((val:any)=>{
      return val.productPrice >= args[0]
    })
  }

}

