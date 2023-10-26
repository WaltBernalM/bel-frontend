import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-country-timezone-card',
  templateUrl: './country-timezone-card.component.html',
  styleUrls: ['./country-timezone-card.component.css'],
})
export class CountryTimezoneCardComponent {
  @Input() countryTimeZones?: string[];
  @Output() setNewTimeZone = new EventEmitter<string>();

  public setTimeZone(timeZone: string) {
    try {
      if (!timeZone.includes('GMT')) throw new Error()
      this.setNewTimeZone.emit(timeZone);
      return true;
    } catch (error) {
      return false;
    }
  }
}
