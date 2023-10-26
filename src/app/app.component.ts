import { Component } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthServiceService) {}
  public title: string = 'bwl-test';
  public currentPage: string = 'signup';
  public updateCurrentPage(page: string): void { 
    this.currentPage = page;
    // console.log(this.currentPage)
  }
}
