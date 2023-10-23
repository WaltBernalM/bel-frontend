import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor() { }
  public getUsers(): User[] {
    return [
      {
        email: 'user@mail.com',
        password: '12342$235FSD',
      },
      {
        email: 'user@hotmail.com',
        password: '12342$235FSD',
      },
      {
        email: 'waltr_7@hotmail.com',
        password: '#Bemw930628'
      }
    ];
  }
}
