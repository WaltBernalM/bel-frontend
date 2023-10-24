import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the option selected event', () => {
    const option = 'TestOption';

    /* spyOn is used to create mock or spy functions for tracking calls and 
    behavior of methods or functions */
    const emitSpy = spyOn(component.optionSelectedEvent, 'emit');
    component.selectOption(option);
    expect(emitSpy).toHaveBeenCalledWith(option);
  })

  it('should evaluate isLogin to true', () => {
    const mockEvent = new Event('');
    const option = 'login';
    component.updateSelection(mockEvent, option);
    expect(component.isLogin).toBeTrue();
  })

  it('should evaluate isSignup to false', () => {
    const mockEvent = new Event('');
    const option = 'signup';
    component.updateSelection(mockEvent, option);
    expect(component.isSignup).toBeTrue();
  });
});
