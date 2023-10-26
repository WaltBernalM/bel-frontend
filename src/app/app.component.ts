import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'bwl-frontend';
  public isLoginComponentVisible: boolean = true;
  
  public toggleComponentVisibility(option: string): void {
    this.evaluateOption(option);
  }
  private evaluateOption(option: string): void {
    if (option === 'login') {
      this.isLoginComponentVisible = true;
    } else {
      this.isLoginComponentVisible = false;
    }
  }
}
