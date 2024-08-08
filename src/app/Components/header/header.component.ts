
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
export class HeaderComponent implements OnInit{
  user:any;
  myData:any;
  userId:any;
  @Output() event= new EventEmitter();

  constructor(private usersService:UsersService){}

  ngOnInit(): void {
    // console.log(this.userId)
    // if(this.userId){
    //   this.usersService.getUserById(this.userId).subscribe({
    //   next:(data)=>{
    //     this.myData=data;
    //     this.user=this.myData['data'];
    //     console.log(this.user)
    //     this.event.emit(this.user);
    //   },
    //   error:(err)=>{
    //     console.log(err);
    //   }
    // });
    // }
  }

  onUserIdChange(): void {
    // Emit the event whenever userId changes
    //this.event.emit(this.userId);
    console.log(this.userId)
    // Optionally, fetch user data by ID if needed
    if (this.userId) {
      // this.usersService.getUserById(this.userId).subscribe({
      //   next: (data) => {
      //     this.myData=data;
      //     this.user=this.myData['data'];
      //     this.event.emit(this.user); // Emit the user data
      //   },
      //   error: (err) => {
      //     console.error(err);
      //   }
      // });
      this.event.emit(this.userId); 
    }
  }
}
