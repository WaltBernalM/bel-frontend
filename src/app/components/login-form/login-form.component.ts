import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  @Input() user: User = { email: '', password: '' };
  public validPassword: boolean = true;
  public validEmail: boolean = true;
  public users: User[] = [];
  public userInDb: User[] = [];

  public ngOnInit(): void {
    this.getLoginData();
  }
  public getLoginData(): void {
    this.users = this.authService.getUsers();
  }

  public onSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission behavior
    this.validateEmail();
    this.validatePassword();
    this.userInDb = this.users.filter((user) => user.email === this.user.email);
    this.login();
  }
  private login(): void {
    if (this.validEmail && this.validPassword && this.userInDb.length > 0) {
      this.authService.postLogin(this.user.email, this.user.password)
      this.router.navigate(['/dashboard']);
    } else {
      this.validEmail = false;
      this.validPassword = false;
    }
  }

  public validateEmail(): void {
    const email = this.user.email;
    this.validEmail = email.includes('@') && email.includes('.com');
  }
  public validatePassword(): void {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#*]{7,}$/;
    const password = this.user?.password;
    this.validPassword = passwordRegex.test(password);
  }
}
