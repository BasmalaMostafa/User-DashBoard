import { Directive, ElementRef, HostListener } from "@angular/core";
import { NavigationService } from "../Services/navigation.service";


 
@Directive({
  selector: "[backButton]",
  standalone:true
})
export class BackButtonDirective {
  constructor(private navigation: NavigationService,public btn:ElementRef) {}
 
  @HostListener("click")
  onClick(): void {
    this.navigation.back();
  }

  @HostListener("mouseover") onMouseOver(): void {
    this.btn.nativeElement.style.transform = 'scale(1.1)';
  }

  @HostListener("mouseout") onMouseOut(): void {
    this.btn.nativeElement.style.transform = 'scale(1)';
  }

  }