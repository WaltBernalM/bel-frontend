import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPageComponent } from './sign-page.component';

describe('LoginPageComponent', () => {
  let component: SignPageComponent;
  let fixture: ComponentFixture<SignPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignPageComponent],
    });
    fixture = TestBed.createComponent(SignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
