import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  
  }

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  userToSave = new User();

  savedUser:User;

  onSubmit() {
    this.userToSave.firstName = this.userForm.get('firstName').value;
    this.userToSave.lastName = this.userForm.get('lastName').value;
    this.userToSave.email = this.userForm.get('email').value;
    this.userToSave.password = this.userForm.get('password').value;

    this.userService.registerUser(this.userToSave).subscribe(
      user => this.savedUser = user, 
  );
    this.router.navigate(['']);
    alert('Registered user with email: ' + this.userToSave.email);
  }

}
