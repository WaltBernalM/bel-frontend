import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TimeUpdaterService } from 'src/app/services/time-updater.service';
import { format, utcToZonedTime } from 'date-fns-tz';

@Component({
  selector: 'app-country-time-card',
  templateUrl: './country-time-card.component.html',
  styleUrls: ['./country-time-card.component.css'],
})
export class CountryTimeCardComponent implements OnInit {
  constructor(private timeUpdaterService: TimeUpdaterService) {}

  @Input() timeZone?: string;
  
  public currentTime$: Observable<Date> = new Observable<Date>();

  public zonedTime?: string

  ngOnInit(): void {
    this.currentTime$ = this.getCurrentTime()
  }

  public getCurrentTime(): Observable<Date> {
    return this.timeUpdaterService.getCurrentTime().pipe(
      map((time) => {
        this.zonedTime = this.switchTimeZone(this.timeZone!);
        let gmtDate = this.transformToDateString(time, this.zonedTime)
        return new Date(gmtDate);
      })
    );
  }

  public transformToDateString(time: any, zonedTime: string): string { 
    return new Date(time).toLocaleString('en-US', {
      timeZone: zonedTime,
    });
  }

  public switchTimeZone(timeZone: string): string {
    switch (timeZone) {
      case 'GMT-5':
        return 'America/New_York';
      case 'GMT-6':
        return 'America/Chicago';
      case 'GMT-7':
        return 'America/Denver';
      case 'GMT-8':
        return 'America/Los_Angeles';
      default:
        return 'America/Los_Angeles';
    }
  }
}
