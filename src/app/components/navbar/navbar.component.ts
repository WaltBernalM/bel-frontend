import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() isLoginComponentVisible!: boolean;
  @Output() optionSelectedEvent = new EventEmitter<string>();

  public isLogin: boolean = true;
  public isSignup: boolean = false;

  private selectOption(option: string): void {
    this.optionSelectedEvent.emit(String(option));
  }

  public updateSelection(event: Event, option: string): void {
    event.preventDefault();
    this.selectOption(option);
    if (option === 'login') {
      this.isLogin = true;
      this.isSignup = false;
    } else if (option === 'signup') {
      this.isLogin = false;
      this.isSignup = true;
    }
    this.selectOption(option);
  }
}
