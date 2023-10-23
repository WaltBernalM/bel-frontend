import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  constructor(private loginService: LoginServiceService) {}

  @Input() user: User = { email: '', password: '', fullName: '', passwordValidation: ''};
  public validPassword: boolean = true;
  public validEmail: boolean = true;
  public validFullName: boolean = true;

  public ngOnInit(): void {
    this.getLoginData();
  }

  public onSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission behavior

    this.validateEmail();
    this.validatePassword();
    this.validateFullName();
    const userInDb = this.users.filter(
      (user) => user.email === this.user.email
    );
    if (this.validEmail && this.validPassword && this.validFullName) {
      if (userInDb.length > 0) {
        this.validEmail = false;
      } else {
        console.log('successfull signup');
      }
    } else {
      window.alert('An error occurred');
    }
  }
  public validateFullName(): void { 
    const fullName = this.user.fullName;
    this.validFullName = Boolean(fullName?.includes(' ') && fullName.length > 7);
  }
  public validateEmail(): void {
    const email = this.user.email;
    this.validEmail = email.includes('@') && email.includes('.com');
  }
  public validatePassword(): void {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#*]{7,}$/;
    const password = this.user?.password;
    this.validPassword = passwordRegex.test(password) && (this.user.password === this.user.passwordValidation);
  }
  public showFormControls(form: any): boolean {
    return form && form.controls.name && form.controls.name.value; // Dr. IQ
  }

  private users: User[] = [];
  public getLoginData(): void {
    this.users = this.loginService.getUsers();
  }
}
