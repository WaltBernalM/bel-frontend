import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTimezoneCardComponent } from './country-timezone-card.component';

describe('CountryTimezoneCardComponent', () => {
  let component: CountryTimezoneCardComponent;
  let fixture: ComponentFixture<CountryTimezoneCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryTimezoneCardComponent]
    });
    fixture = TestBed.createComponent(CountryTimezoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the Time Zone by GMT', () => { 
    const timeZoneToSet = 'GMT-5';
    expect(component.setTimeZone(timeZoneToSet)).toBeTrue();
  })

  it('should not set the Time Zone if no GMT provided', () => { 
    const timeZoneToSet = 'GT-5';
    expect(component.setTimeZone(timeZoneToSet)).toBeFalse();
  })
});
