//import Pipe and PipeTransform from the Angular 2 core
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class uppercase implements PipeTransform {
//transform, of which is required to create custom Angular 2 pipes
  transform(value: string): string {
   let  newValue = value.toUpperCase();   
    return newValue;
  }
}