import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(private loginService: LoginServiceService) {}

  @Input() user: User = { email: '', password: '' };
  public validPassword: boolean = true;
  public validEmail: boolean = true;

  public ngOnInit(): void {
    this.getLoginData();
  }

  public onSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission behavior

    this.validateEmail();
    this.validatePassword();
    const userInDb = this.users.filter(
      (user) => user.email === this.user.email
    );
    if (this.validEmail && this.validPassword) {
      if (userInDb.length > 0) {
        console.log('successfull login');
      } else {
        this.validEmail = false;
      }
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
  public showFormControls(form: any): boolean {
    return form && form.controls.name && form.controls.name.value; // Dr. IQ
  }

  private users: User[] = [];
  public getLoginData(): void {
    this.users = this.loginService.getUsers();
  }
}
