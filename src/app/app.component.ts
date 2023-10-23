import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bwl-frontend';
  selectedOption: string = 'login';
  updateSelectedOption(option: string): void { 
    this.selectedOption = option;
  }
}
