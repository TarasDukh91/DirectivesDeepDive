import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'green';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
    //this.highlightColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange')
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'tranparent';

  @HostListener('mouseenter') mouseover(eventData) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange')
    this.backgroundColor = this.defaultColor
  }
  @HostListener('mouseleave') mouseleave(eventData) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey')
    this.backgroundColor = this.highlightColor
  }
}
