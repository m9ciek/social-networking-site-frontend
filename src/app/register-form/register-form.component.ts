import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  users: User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  
  addUser(newUser:User): void {
    this.userService
        .addUser(newUser)
        .subscribe(user => this.users.push(user));
  }

}
