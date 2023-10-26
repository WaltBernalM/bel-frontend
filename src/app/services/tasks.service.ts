import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}
  public allTasks: Task[] = [
    {
      description: 'Ir al banco',
      completed: false,
    },
    {
      description: 'Revisar balance general',
      completed: false,
    },
    {
      description: 'Ajustar metricas de diseno',
      completed: false,
    },
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
    },
  ];

  public getAllTasks(): Task[] {
    return this.allTasks;
  }

  public getFinishedTasks(): Task[] {
    return this.allTasks.filter((task) => task.completed);
  }

  public getUnfinishedTasks(): Task[] {
    return this.allTasks.filter((task) => !task.completed);
  }
}
