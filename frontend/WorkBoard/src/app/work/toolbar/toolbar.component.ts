import {Component, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {CreateModalComponent} from "../create-modal/create-modal.component";
import {CreateTaskModel} from "../create-modal/create-task-model";
import {ITask} from '../../models/task';

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {

  @Output() searchEntered: EventEmitter<string> = new EventEmitter<string>();
  @Output() taskCreated: EventEmitter<ITask> = new EventEmitter<ITask>();

  @ViewChild(CreateModalComponent) modal: CreateModalComponent;

  constructor() {
  }

  ngOnInit() {
  }

  forwardTaskCreatedEvent(task: ITask): void {
    console.log("forwarding event");
    this.taskCreated.emit(task);
  }

  set searchString(value: string) {
    this.searchEntered.emit(value);
  }

  initializeModal(): void {
    this.modal.taskModel = new CreateTaskModel("", "", [], null);
    this.modal.tagEntry = "";
    console.log(this.modal.taskModel.dueDate);
  }
}
