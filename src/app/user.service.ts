import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = "http://localhost:8080/users";
  private registerUrl = "http://localhost:8080/register";

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }

  registerUser(registeredUser:User): Observable<any>{
    return this.http.post(this.registerUrl, registeredUser);
  }
}
