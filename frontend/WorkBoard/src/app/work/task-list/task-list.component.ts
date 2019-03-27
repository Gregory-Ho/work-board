import {Component, OnInit} from '@angular/core';
import {ITask} from '../task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: ITask[] = [{
    id: 532,
    summary: 'Summary',
    dueDate: new Date(),
    created: new Date(),
    updated: new Date(),
    description: 'Description',
    tags: ['Test', 'Tag']
  }, {
    id: 532,
    summary: 'Sample Task Summary/Description Heading',
    dueDate: new Date(),
    created: new Date(),
    updated: new Date(),
    description: 'This is some text that would describe the task. This is some text that would describe the task.This is some text that would describe the\n' +
      'task.It should be cut off if too long.',
    tags: ['Test', 'Tag']
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
