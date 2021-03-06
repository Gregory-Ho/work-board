import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {CreateTaskModel} from "../create-modal/create-task-model";
import {ITask} from '../../models/task';
import {TaskService} from '../service/task.service';

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {

  @Output() searchEntered: EventEmitter<string> = new EventEmitter<string>();
  @Output() taskCreated: EventEmitter<ITask> = new EventEmitter<ITask>();

  public emptyTaskModel: ITask = new CreateTaskModel("", "", [], null);
  public currentTagInputValue: string;

  constructor(private taskService: TaskService) {
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
    this.emptyTaskModel = new CreateTaskModel("", "", [], null);
    this.currentTagInputValue = null;
  }

  createTask(taskModel: ITask): void {
    this.taskService.createTask(taskModel).subscribe(
      data => {
        this.forwardTaskCreatedEvent(data);
        console.log("Emitting event");
      },
      error => {
        console.log(error);
      }
    );
  }
}
