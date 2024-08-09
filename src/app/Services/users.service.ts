import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from '../Models/User.Model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) {}

  private pageOneData="https://reqres.in/api/users?page=1";
  private pageTwoData="https://reqres.in/api/users?page=2";
  private url="https://reqres.in/api/users";

  // In-memory cache
  private cache = new Map<string, any>();

  getPageOneUsers(): Observable<User[]>{
    return this.getCachedData(this.pageOneData);
  }

  getPageTwoUsers(): Observable<User[]>{
    return this.getCachedData(this.pageTwoData);
  }

  getUserById(userId:number): Observable<User>{
    return this.getCachedData(this.url+"/"+userId);
  }

  private getCachedData(url: string): Observable<any> {
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    } else {
      return this.httpClient.get(url).pipe(
        tap(data => this.cache.set(url, data)),
        catchError(error => {
          console.error('Error fetching data', error);
          return of(null);
        })
      );
    }
  }
}