import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social Networking Site';

  constructor(private router: Router) { }

  loggedIn:boolean;

  @HostListener("window:onbeforeunload",["$event"])
    clearLocalStorage(event){
      localStorage.clear();
    }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  logout(){
    localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['']);
    alert('Successfully logged out');
  }

  checkIfLoggedIn(){
    if(localStorage.getItem('jwt')!=null){
      this.loggedIn = true;
    }
  }
  
}
