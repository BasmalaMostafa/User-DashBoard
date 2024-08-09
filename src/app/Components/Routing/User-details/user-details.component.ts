import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService } from '../../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BackButtonDirective } from '../../../Directives/backButton.directive';
import { ButtonStyleDirective } from '../../../Directives/buttonStyle.directive';
import { User } from '../../../Models/User.Model';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterModule,BackButtonDirective,ButtonStyleDirective],
  providers:[UsersService],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  myData:any;
  user:User={id:0,first_name:"",last_name:"",avatar:"",email:""};
  userId=0;
  isLoading:boolean=false;

constructor(id:ActivatedRoute,private usersService:UsersService){
this.userId=id.snapshot.params["id"];
}
  ngOnInit(): void {
    this.isLoading=true;
    this.usersService.getUserById(this.userId).subscribe({
      next:(data)=>{
        this.myData=data;
        this.user=this.myData['data'];
        this.isLoading=false;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  
  }
}
