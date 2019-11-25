import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    })
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = "http://localhost:8080/users"

  constructor(private http:HttpClient) { }

  
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

}
