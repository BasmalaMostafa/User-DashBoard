
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import {FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent{
  userId:any;
  @Output() event= new EventEmitter();

  onUserIdChange(): void {
    console.log(this.userId)
      this.event.emit(this.userId); 
  }
}
