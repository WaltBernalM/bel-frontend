import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent  {
  constructor(private authService: AuthServiceService) { }
  public allUsers: User[] = [];

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(): void { 
    this.allUsers = this.authService.getUsers()
  }
}
