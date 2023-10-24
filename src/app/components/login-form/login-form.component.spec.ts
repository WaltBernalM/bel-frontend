import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { User } from 'src/app/user';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return false', () => {
    // component.users = [{ email: 'foo@bar.com', password: '#Bemw930628' }];
    component.userInDb = [{ email: 'foo@bar.com', password: '#Bemw930628' }];
    component.validEmail = true;
    component.validPassword = true;
    const event = new Event('')
    component.onSubmit(event);
    expect(component.validEmail).toBeFalse();
  });

  it('Should return false', () => {
    // component.users = [{ email: 'foo@bar.com', password: '#Bemw930628' }];
    component.userInDb = [{ email: 'foo@bar.com', password: '#Bemw930628' }];
    component.validEmail = true;
    component.validPassword = true;
    component.validateEmailAndPassword();
    expect(component.validEmail).toBeTruthy();
  });

  it('Should return false', () => {
    // component.users = [{ email: 'foo@bar.com', password: '#Bemw930628' }];
    component.userInDb = [];
    component.validEmail = true;
    component.validPassword = true;
    component.validateEmailAndPassword();
    expect(component.validEmail).toBeFalse();
  });
});
