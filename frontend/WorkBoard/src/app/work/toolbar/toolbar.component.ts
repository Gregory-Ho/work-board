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
  @Output() sortSelected: EventEmitter<string> = new EventEmitter<string>();

  private emptyTaskModel: ITask = new CreateTaskModel("", "", [], null);
  private currentTagInputValue: string;
  private selectedSortMethod: string = "Summary"

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

  sort(sortFilter: string) {
    this.selectedSortMethod = sortFilter;
    this.sortSelected.emit(sortFilter);
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
