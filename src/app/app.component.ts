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

  @HostListener("window:onbeforeunload",["$event"])
    clearLocalStorage(event){
      localStorage.clear();
    }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
    alert('Successfully logged out');
  }
}
