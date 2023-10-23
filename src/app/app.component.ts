import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bwl-frontend';
  isLogin: boolean = true;
  isSignup: boolean = false;

  @Output() selectionChanged = new EventEmitter<string>();

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
