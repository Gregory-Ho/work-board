import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from "../../models/task";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {

  @Input() tasks: ITask[];
  @Input() gotError: boolean;
  @Output() clickedTaskId: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  taskClicked(taskId: number): void {
    console.log(`Task #${taskId} was clicked`);
    this.clickedTaskId.emit(taskId);
  }
}
