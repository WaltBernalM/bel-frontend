import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/country';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  public countryList: Country[] = this.apiService.countries;
  public country: Country = this.countryList[0];
  public temperature: number = 0;
  public condition: string = '';
  public iconUrl: string = '';
  public countryName: string = this.country.name
  public countryFlag: string = this.country.flag
  
  public countryTimeZones: string[] = this.country.timeZones
  public timeZone: string = this.countryTimeZones[0]

  public ngOnInit(): void {
    this.fetchWeatherData();
  }

  public updateCountry(countryName: string): void {
    const countryToSet = this.countryList.filter(country => country.name === countryName)
    this.country = countryToSet[0]
    this.countryName = countryName
    this.countryTimeZones = countryToSet[0].timeZones
    this.fetchWeatherData()
  }

  public updateTimeZone(timeZone: string): void { 
    this.timeZone = timeZone;
  }

  public fetchWeatherData(): any {
    return this.apiService.getWeather(this.countryName).subscribe((data) => {
      const { current } = data;
      this.temperature = current.temp_c;
      this.condition = current.condition.text
      this.iconUrl = current.condition.icon
    });
  }
}
