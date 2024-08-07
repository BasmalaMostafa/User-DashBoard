import { Component } from '@angular/core';
import { UserComponent } from '../../student/user.component';
import { UsersService } from '../../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent,HttpClientModule,CommonModule,RouterModule,NgxPaginationModule,HeaderComponent],
  providers:[UsersService],
  templateUrl: './users.component.html',
  styleUrls: []
})
export class UsersComponent {
  myData:any;
  PageOneUsers:any;
  allUsers:any;
  index: number = 1;

  constructor(private usersService:UsersService){}

  ngOnInit(): void {
    this.usersService.getPageOneUsers().subscribe({
      next:(data)=>{
        this.myData=data;
        console.log(this.myData);
        this.PageOneUsers=this.myData['data'];
   // console.log(this.PageOneUsers);

      },
      error:(error)=>{
        console.log(error);
        
      },
      complete:()=>{
        console.log("Completed");
        
      }
    });
    this.usersService.getPageTwoUsers().subscribe({
      next:(data)=>{
        this.myData=data;
        console.log(this.myData);
        this.allUsers=[...this.PageOneUsers,...this.myData['data']];
   //console.log(this.allUsers);

      },
      error:(error)=>{
        console.log(error);
        
      },
      complete:()=>{
        console.log("Completed");
        
      }
    });
  }
}
