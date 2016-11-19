

    import { Component } from '@angular/core';
     
    // webpack html imports
    let template = require('./carousel-demo.html');
     
    @Component({
      selector: 'carousel-demo',
      template: template
    })
    export class CarouselDemoComponent {
      public myInterval:number = 5000;
      public noWrapSlides:boolean = false;
      public slides:Array<any> = [];
     
      public constructor() {
        for (let i = 1; i < 5; i++) {
          this.addSlide(i);
        }
      }
     
      public addSlide(i:number):void {
        let newWidth = 600 + this.slides.length + 1;
        this.slides.push({
          image: "./assets/images/"+i+".png"
        
        });
      }
     
      public removeSlide(index:number):void {
        this.slides.splice(index, 1);
      }
    }

