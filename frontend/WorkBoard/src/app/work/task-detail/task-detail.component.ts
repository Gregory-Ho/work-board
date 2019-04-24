import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from '../../models/task';
import {TaskService} from '../service/task.service';
import {CreateTaskModel} from "../create-modal/create-task-model";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Output() closePanelButtonClicked = new EventEmitter<void>();
  @Input() taskModel: ITask;
  @Input() gotError: boolean = true;

  private currentTagInputValue: string;

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
  }
}
