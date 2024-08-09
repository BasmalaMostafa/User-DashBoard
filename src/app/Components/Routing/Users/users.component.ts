import { Component, Input } from '@angular/core';
import { UserComponent } from '../../User/user.component';
import { UsersService } from '../../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../../header/header.component';
import { User } from '../../../Models/User.Model';

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
  PageOneUsers:User[]=[];
  allUsers:User[]=[];
  index: number = 1;
  user:any;
  numOfUsers:number=0;
  notInRange:boolean=false;
  isLoading:boolean=false;

  constructor(private usersService:UsersService){}

  ngOnInit(): void {
    this.isLoading=true;
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
        this.isLoading=false;
        this.numOfUsers=this.allUsers.length;
        // this.allUsers=[];
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

  handleUserDataChange(id: any): void {
    if (id) {
     if(id<=this.numOfUsers){
      this.isLoading=true;
      this.usersService.getUserById(id).subscribe({
        next: (data) => {
          this.myData=data;
          this.user=this.myData['data'];
          this.isLoading=false;
        },
        error: (err) => {
          console.error(err);
        }
      });
      this.notInRange=false;
    }else{
      this.notInRange=true;
     }
    }else{
      this.user=null;
      this.notInRange=false;
    }
  }
}
