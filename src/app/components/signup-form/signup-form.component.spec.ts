import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormComponent } from './signup-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should evaluate to truthy', () => {
    const mockEvent = new Event('');
    component.onSubmit(mockEvent);
    component.userInDb = []
    expect(component.validEmail).toBeFalse();
  });

  it('should evaluate valid email to false', () => { 
    component.validEmail = false;
    component.validFullName = false;
    component.validPassword = false;
    component.userInDb = [{email: '', password: ''}]
    component.validateEmailAndPassword()
    expect(component.validEmail).toBeFalse();
  })
});
