import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin: boolean = true;
  isSignup: boolean = false;
  public updateSelection(event: Event, option: string): void {
    event.preventDefault();
    if (option === 'login') {
      this.isLogin = true;
      this.isSignup = false;
    } else if (option === 'signup') { 
      this.isLogin = false;
      this.isSignup = true;
    }
  }
}
