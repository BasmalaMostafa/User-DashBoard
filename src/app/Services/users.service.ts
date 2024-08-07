import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) {}

  private pageOneData="https://reqres.in/api/users?page=1";
  private pageTwoData="https://reqres.in/api/users?page=2";
  private url="https://reqres.in/api/users";


  getPageOneUsers(){
    return this.httpClient.get(this.pageOneData);
  }

  getPageTwoUsers(){
    return this.httpClient.get(this.pageTwoData);
  }

  getUserById(userId:number){
    return this.httpClient.get(this.url+"/"+userId);
  }
}
