import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.css']
})
export class TasksCardComponent implements OnInit {
  constructor(private tasksService: TasksService){}
  
  @Input() finished?: boolean;
  
  public tasks: Task[] = [];
  
  ngOnInit(): void {
    this.tasks = this.getTasks(this.finished!);
  }

  public getTasks(status: boolean): Task[] {
    return status
      ? this.tasksService.getFinishedTasks()
      : this.tasksService.getUnfinishedTasks();
  }
}
