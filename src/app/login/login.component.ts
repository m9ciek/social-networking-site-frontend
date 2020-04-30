import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  signIn(){
    if(this.loginFormGroup.valid){
      this.authService.login(this.loginFormGroup.value).subscribe(res=>{
        console.log(res);
        console.log(res.jwt);
        localStorage.setItem('jwt',res.jwt);
      })
    }
  }
}
