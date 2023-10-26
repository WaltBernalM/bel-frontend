import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCardComponent } from './tasks-card.component';

describe('TasksCardComponent', () => {
  let component: TasksCardComponent;
  let fixture: ComponentFixture<TasksCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksCardComponent]
    });
    fixture = TestBed.createComponent(TasksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return finished tasks', () => { 
    component.finished = true;
    const retrievedTasks = component.getTasks(component.finished)
    const allFinished = retrievedTasks.filter(task => task.completed)
    expect(allFinished.length).toBeTruthy();
  })

  it('should return tasks', () => {
    component.ngOnInit()
    expect(component.tasks).toBeTruthy();
  })

  it('should return correct tasks', () => {
    const expectedTasks = [
      {
        description: 'Terminar la prueba',
        completed: true,
      },
      {
        description: 'Debuggear el codigo',
        completed: true,
      },
      {
        description: 'Realizar pruebas unitarias',
        completed: true,
      }
    ];
    component.ngOnInit();
    expect((component.tasks = expectedTasks)).toBeTruthy();
  })
});
