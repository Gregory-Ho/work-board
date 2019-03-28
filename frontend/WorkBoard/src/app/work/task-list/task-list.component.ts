import {Component, OnInit} from '@angular/core';
import {ITask} from '../task';
import {TaskService} from '../task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  private tasks: ITask[];
  private gotError = false;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      data => {
        this.tasks = data;
        this.gotError = false;
      },
      error => {
        console.log(error);
        this.gotError = true;
      }
    );
  }

}
