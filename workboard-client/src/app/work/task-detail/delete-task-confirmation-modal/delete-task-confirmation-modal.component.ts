import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from "../../../models/task";

@Component({
  selector: 'app-delete-task-confirmation-modal',
  templateUrl: './delete-task-confirmation-modal.component.html',
  styleUrls: ['./delete-task-confirmation-modal.component.css']
})
export class DeleteTaskConfirmationModalComponent implements OnInit {

  @Input() modalId: string = null;
  @Input() taskModel: ITask;
  @Output() deleteSubmitted: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    this.deleteSubmitted.emit();
  }
}
