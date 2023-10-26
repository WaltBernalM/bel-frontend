import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListComponent } from './country-list.component';
import { Country } from 'src/app/country';
import { exp } from 'mathjs';

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryListComponent]
    });
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected country', () => {
    const selectedCountryName = 'Mexico';
    let emittedCountry: string | undefined;

    component.setNewCountry.subscribe((country: string) => {
      emittedCountry = country;
    });

    const result = component.setCountry(selectedCountryName);
    
    expect(emittedCountry).toBe(selectedCountryName);
    expect(result).toBe(true);
  });

  it('should handle errors and return false', () => {
    const selectedCountryName = 'Mexico';
    let emittedCountry: string | undefined;

    // Create a spy on the EventEmitter's emit method to simulate some error
    spyOn(component.setNewCountry, 'emit').and.throwError('Error emitting');

    const result = component.setCountry(selectedCountryName);

    expect(emittedCountry).toBeUndefined();
    expect(result).toBe(false);
  });
});
