import { Directive, ElementRef, HostListener } from "@angular/core";
 
@Directive({
  selector: "[ButtonStyle]",
  standalone:true
})
export class ButtonStyleDirective {
  constructor(public btn:ElementRef) {}
 
  @HostListener("mouseover") onMouseOver(): void {
    this.btn.nativeElement.style.transform = 'scale(1.1)';
  }

  @HostListener("mouseout") onMouseOut(): void {
    this.btn.nativeElement.style.transform = 'scale(1)';
  }

  }