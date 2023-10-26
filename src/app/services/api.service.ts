import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../country';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private apiKey = '232489f3d2944dcba3a02258232510';
  private baseUrl: string = 'http://api.weatherapi.com/v1';

  public countries: Country[] = [
    { name: 'Mexico', flag: '🇲🇽', timeZones: ['GMT-6', 'GMT-7', 'GMT-8'] },
    { name: 'Belize', flag: '🇧🇿', timeZones: ['GMT-6'] },
    { name: 'Guatemala', flag: '🇬🇹', timeZones: ['GMT-6'] },
    {
      name: 'United States',
      flag: '🇺🇸',
      timeZones: ['GMT-5', 'GMT-6', 'GMT-7', 'GMT-8'],
    },
  ];

  public getWeather(country: string): Observable<any> {
    const url = `${this.baseUrl}/current.json?key=${this.apiKey}&q=${country}&aqi=no`;
    return this.http.get(url);
  }
}
