import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  @Input() user: User = {
    email: '',
    password: '',
    fullName: '',
    passwordValidation: '',
  };
  public validPassword: boolean = true;
  public validEmail: boolean = true;
  public validFullName: boolean = true;
  public userInDb: User[] = [];
  private users: User[] = [];

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
    this.validateFullName();
    this.userInDb = this.users.filter((user) => user.email === this.user.email);
    this.validateEmailAndPassword();
  }
  public validateEmailAndPassword(): void {
    if (this.signup()) {
      this.validEmail = false;
    } else if (this.user.email && this.user.password && this.user.fullName!) {
      this.authService.postSignup(
        this.user.email,
        this.user.password,
        this.user.fullName!
      );
      alert("You have created a new user")
      // this.router.navigate(['/signup']);
    }
  }

  // validates that all are valid options and that the user is not taken already
  public signup(): boolean {
    return (
      this.validEmail &&
      this.validPassword &&
      this.validFullName &&
      this.userInDb.length > 0
    );
  }

  public validateFullName(): void {
    const fullName = this.user.fullName;
    this.validFullName = Boolean(
      fullName?.includes(' ') && fullName.length > 7
    );
  }
  public validateEmail(): void {
    const email = this.user.email;
    this.validEmail = email.includes('@') && email.includes('.com');
  }
  public validatePassword(): void {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#*]{7,}$/;
    const password = this.user?.password;
    this.validPassword =
      passwordRegex.test(password) &&
      this.user.password === this.user.passwordValidation;
  }
}
