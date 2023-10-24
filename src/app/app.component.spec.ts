import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, FormsModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bwl-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bwl-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('bwl-frontend app is running!');
  });

  
  it('should component to render login', () => { 
    const option = 'login';
    component.isLoginComponentVisible = true;
    component.toggleComponentVisibility(option);
    expect(component.isLoginComponentVisible).toBeTrue();
  })

  it('should component to render signup', () => {
    const option = 'signup';
    component.isLoginComponentVisible = true;
    component.toggleComponentVisibility(option);
    expect(component.isLoginComponentVisible).toBeFalse();
  });
  // toggleComponentVisibility(option: string): void {
  //   if (option === 'login') { 
  //     this.isLoginComponentVisible = true;
  //   } else {
  //     this.isLoginComponentVisible = false;
  //   }
  // }
});
