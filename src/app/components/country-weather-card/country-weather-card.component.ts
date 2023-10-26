import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-weather-card',
  templateUrl: './country-weather-card.component.html',
  styleUrls: ['./country-weather-card.component.css'],
})
export class CountryWeatherCardComponent {
  @Input() temperature?: number;
  @Input() condition?: string;
  @Input() iconUrl?: string;
}
