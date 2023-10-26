import { TestBed } from '@angular/core/testing';
import { User } from '../user'
import { AuthServiceService } from './auth-service.service';

describe('AuthServiceService', () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should post a login and return a User', () => {
    const userToFind =     {
      email: 'wbernal@bwl.com.mx',
      password: '#Bemw930628',
      fullName: 'Walter Bernal',
    }
    expect(service.postLogin(userToFind.email, userToFind.password)).toBeTruthy();
  });

  it('should post a login and return null', () => {
    const userToFind = {
      email: 'user@else.com',
      password: '12342$235FSD',
      fullName: 'John Doe',
    };
    expect(
      service.postLogin(userToFind.email, userToFind.password)
    ).toBeFalsy();
  });

  it('should return null the signup of duplicated user', () => {
    const userToCreate = {
      email: 'wbernal@bwl.com.mx',
      password: '#Bemw930628',
      fullName: 'Walter Bernal',
    };
    expect(service.postSignup(userToCreate.email, userToCreate.password, userToCreate.fullName)).toBeFalse();
  })

  it('should return User the signup of duplicated user', () => {
    const userToCreate = {
      email: 'newuser@new.com',
      password: '12342$235FSD',
      fullName: 'John Doe',
    };
    expect(
      service.postSignup(
        userToCreate.email,
        userToCreate.password,
        userToCreate.fullName
      )
    ).toBeTrue();
  });
});
