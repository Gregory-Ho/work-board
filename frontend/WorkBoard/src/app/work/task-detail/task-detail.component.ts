import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from '../../models/task';
import {TaskService} from '../service/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Output() closePanelButtonClicked = new EventEmitter<void>();
  @Output() updateCompleted = new EventEmitter<ITask>();
  @Input() gotError: boolean = true;

  private taskModel: ITask;
  private taskModelCopy: ITask;
  private currentTagInputValue: string;

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
  }

  handleUpdateEvent(task: ITask): void {
    this.taskService.updateTaskById(task).subscribe(
      data => {
        this.taskModel = data;
        this.updateCompleted.emit(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
