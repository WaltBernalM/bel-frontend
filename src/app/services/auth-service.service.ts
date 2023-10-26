import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}
  public allUsersInDb: User[] = [
    {
      email: 'dmartinez@bwl.com.mx',
      password: '12342$235Fsd',
      fullName: 'Angel Damian Martinez Delfin',
      creationDate: '21/04/2021',
      lastLogin: '21/04/2021 11:25',
    },
    {
      email: 'jdarc@bwl.com.mx',
      password: '12342$235FSD',
      fullName: "Jane D'Arc",
      creationDate: '21/06/2022',
      lastLogin: '26/09/2023 18:25',
    },
    {
      email: 'wbernal@bwl.com.mx',
      password: '#Bemw930628',
      fullName: 'Walter Bernal',
      creationDate: '23/10/2023',
      lastLogin: '25/10/2023 23:03',
    },
  ];

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  private userInSessionSubject = new BehaviorSubject<User>({
    email: '',
    password: '',
    fullName: '',
  });

  public userInSession = this.userInSessionSubject.asObservable();

  public userName: string = '';

  public getUsers(): User[] {
    return this.allUsersInDb;
  }
  public postLogin(email: string, password: string): boolean {
    const matchedUsers = this.findUser(email, password);
    if (matchedUsers.length === 1) {
      this.isAuthenticatedSubject.next(true);
      this.userInSessionSubject.next({
        email: matchedUsers[0].email,
        password: matchedUsers[0].password,
        fullName: matchedUsers[0].fullName,
        lastLogin: new Date().toLocaleString('en-US', {
          timeZone: 'America/Denver'
        })
      });
      this.userName = matchedUsers[0].fullName!;
      this.allUsersInDb = this.allUsersInDb.map(user => {
        if (user.email === email) {
          const now = new Date()
          return {
            ...user,
            lastLogin: `${now.getDate()}/${
              now.getMonth() + 1
            }/${now.getFullYear()} ${now.getHours() + 1}:${now.getMinutes()}`,
          };
        }
        return user;
      })

      return true;
    } else {
      this.isAuthenticatedSubject.next(false);
      return false;
    }
  }
  private findUser(email: string, password: string): User[] {
    return this.allUsersInDb.filter(
      (user) => user.email === email && user.password === password
    );
  }
  public postSignup(
    email: string,
    password: string,
    fullName: string
  ): boolean {
    const matchedUsers = this.findUser(email, password);
    if (matchedUsers.length > 0) {
      this.isAuthenticatedSubject.next(false);
      return false;
    } else {
      this.allUsersInDb.push({ email, password, fullName });
      // this.isAuthenticatedSubject.next(true);
      // console.log(this.allUsersInDb)
      return true;
    }
  }
}
