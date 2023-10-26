import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service'
import { Subscription } from 'rxjs'; // Import Subscription from the 'rxjs' library

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() currentPage?: string;

  public selected: string = 'login';
  public userIslogged: boolean = false;
  private authSubscription: Subscription;
  public userName: string = '';
  public usernameInitials: string = '';

  constructor(private authService: AuthServiceService) {
    this.authSubscription = this.authService.isAuthenticated.subscribe(
      (value) => {
        this.userIslogged = value;
        if (this.userIslogged) { 
          this.selected = 'dashboard'; // short fix to select dashboard when logged in
          this.authService.userInSession.subscribe({
            next: (response) => {
              this.userName = String(response.fullName)
              this.usernameInitials = `${this.userName[0]}${this.userName[this.userName.indexOf(' ')+1]}`
              
            },
            error: (error) => {},
          });
        }
      }
    );
  }

  // Unsubscribe to avoid memory leaks when the component is destroyed
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
  public setSelected(option: string) {
    this.selected = option;
    // console.log('userName: ', this.authService.userName, this.userName)
  }
}
