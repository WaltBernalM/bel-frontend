import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.css'],
})
export class SignPageComponent {
  @Input() isLoginComponentVisible!: boolean;
}
