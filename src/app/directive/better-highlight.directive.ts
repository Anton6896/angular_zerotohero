import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef
  ) { }
  /**
   * olways use renderer for acces the dom elements from code if deddet at all
   * this is the better practice, insted of acces them straight forward and 
   * do manipulatons 
   * https://angular.io/api/core/Renderer2
   * 
   */
  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'green'
    // )
  }


  @HostListener('mouseenter') mouseIn(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'green'
    )
  }

  @HostListener('mouseleave') mouseOut(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
    )
  }
}
