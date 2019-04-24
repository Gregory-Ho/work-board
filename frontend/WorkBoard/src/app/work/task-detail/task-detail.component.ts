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
  @Input() taskModel: ITask;
  @Input() gotError: boolean = true;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  closeDetailPanel(): void {
    this.closePanelButtonClicked.emit();
  }

  handleUpdateEvent(task: ITask): void {
  }
}
