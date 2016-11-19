    import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
    @Directive({
      selector: '[numbersOnly]'
    })
    export class NumbersOnlyDirective {
      constructor(private el: ElementRef, private renderer: Renderer) { }
      @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
      }
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight('yellow');
      }
      private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
      }
    }