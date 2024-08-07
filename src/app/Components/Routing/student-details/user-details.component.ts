import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService } from '../../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterModule],
  providers:[UsersService],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  myData:any;
  user:any;
  userId=0;
  delete:boolean=false;

constructor(id:ActivatedRoute,private usersService:UsersService){
this.userId=id.snapshot.params["id"];
}
  ngOnInit(): void {
    this.usersService.getUserById(this.userId).subscribe({
      next:(data)=>{
        this.myData=data;
        this.user=this.myData['data'];
      },
      error:(err)=>{
        console.log(err);
      }
    });
  
  }
}
