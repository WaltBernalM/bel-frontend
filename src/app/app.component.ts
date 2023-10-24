import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bwl-frontend';
  isLoginComponentVisible: boolean = true;
  
  toggleComponentVisibility(option: string): void {
    if (option === 'login') { 
      this.isLoginComponentVisible = true;
    } else {
      this.isLoginComponentVisible = false;
    }
  }
  print(thing: any): void {
    console.log(thing)
  }
}
