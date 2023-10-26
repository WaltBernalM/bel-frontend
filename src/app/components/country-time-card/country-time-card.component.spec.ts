import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTimeCardComponent } from './country-time-card.component';
import { Observable } from 'rxjs';

describe('CountryTimeCardComponent', () => {
  let component: CountryTimeCardComponent;
  let fixture: ComponentFixture<CountryTimeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryTimeCardComponent]
    });
    fixture = TestBed.createComponent(CountryTimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return observable Date', () => { 
    const date = component.getCurrentTime()
    expect(date).toBeInstanceOf(Observable)
  })

  it('should switch correctly', () => {
    const result1 = component.switchTimeZone('GMT-5') === 'America/New_York';
    const result2 = component.switchTimeZone('GMT-6') === 'America/Chicago';
    const result3 = component.switchTimeZone('GMT-7') === 'America/Denver';
    const result4 = component.switchTimeZone('GMT-8') === 'America/Los_Angeles';
    const defResult = component.switchTimeZone('') === 'America/Los_Angeles';
    expect(result1 && result2 && result3 && result4 && defResult).toBeTrue();
  });

  it('should return a localeString', () => { 
    const result = component.transformToDateString(new Date(), 'America/New_York');
    expect(new Date(result)).toBeInstanceOf(Date);
  })
});
