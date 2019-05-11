import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from '../../models/task';
import {TaskService} from '../service/task.service';
import {TaskStatus} from "../../models/task-status-enum";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Output() closePanelButtonClicked = new EventEmitter<void>();
  @Output() updateCompleted = new EventEmitter<ITask>();
  @Output() deleteCompleted = new EventEmitter<ITask>();
  @Input() gotError: boolean = true;

  private TaskStatus = TaskStatus;
  public taskModel: ITask;
  public taskModelCopy: ITask;
  public currentTagInputValue: string;

  @Input("taskModel")
  set TaskModel(task: ITask) {
    this.taskModel = task;
    this.taskModelCopy = JSON.parse(JSON.stringify(task));
  }

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  closeDetailPanel(): void {
    this.closePanelButtonClicked.emit();
  }

  initializeModal(): void {
    this.currentTagInputValue = null;
    this.taskModelCopy = JSON.parse(JSON.stringify(this.taskModel));
  }

  handleUpdateEvent(task: ITask): void {
    this.taskService.updateTaskById(task).subscribe(
      data => {
        this.taskModel = data;
        this.updateCompleted.emit(data);
      },
      error => {
        console.log(error);
        alert(`Update to task with id # ${this.taskModel.id} failed. Please check the logs.`);
      }
    );
  }

  deleteSelectedTask(): void {
    this.taskService.deleteTaskById(this.taskModel.id).subscribe(
      data => {
        this.taskModel = data;
        this.taskModelCopy = JSON.parse(JSON.stringify(this.taskModel));
        this.deleteCompleted.emit(data);
      },
      error => {
        console.log(error);
        alert(`Delete to task with id # ${this.taskModel.id} failed. Please check the logs.`);
      }
    );
  }
}
