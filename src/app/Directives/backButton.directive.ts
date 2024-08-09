import { Directive, HostListener } from "@angular/core";
import { NavigationService } from "../Services/navigation.service";


 
@Directive({
  selector: "[backButton]",
  standalone:true
})
export class BackButtonDirective {
  constructor(private navigation: NavigationService) {}
 
  @HostListener("click")
  onClick(): void {
    this.navigation.back();
  }
  }