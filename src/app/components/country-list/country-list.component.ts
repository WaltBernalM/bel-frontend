import { Component, Input, Output } from '@angular/core';
import { Country } from 'src/app/country';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent {
  @Input() countryList?: Country[];
  @Output() setNewCountry = new EventEmitter<string>();


  public setCountry(country: string): boolean {
    try {
      this.setNewCountry.emit(country);
      return true;
    } catch (error) {
      return false;
    }
  }
}
