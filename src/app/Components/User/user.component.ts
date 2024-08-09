import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonStyleDirective } from '../../Directives/buttonStyle.directive';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule,ButtonStyleDirective],
  templateUrl: './user.component.html',
  styles: ``
})
export class UserComponent {
 @Input() user:any;
 
}
