import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageComponent } from './dashboard-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, RouterTestingModule, HttpClientModule],
    });
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set new country', () => {
    const newCountry = { name: 'Mexico', flag: '🇲🇽', timeZones: [] }
    component.updateCountry(newCountry.name)
    expect(component.country.name).toBe('Mexico');
  });

  it('should return true for api call',() => {
    const data = component.fetchWeatherData()
    expect(data).toBeTruthy();
  })

  it('should correctly update the timezone', () => { 
    const timeZoneToUpdate = 'GMT-5'
    component.updateTimeZone(timeZoneToUpdate)
    expect(component.timeZone === timeZoneToUpdate).toBeTrue();
  })
});
