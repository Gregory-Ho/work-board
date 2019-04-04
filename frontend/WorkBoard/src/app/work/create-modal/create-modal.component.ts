import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ITask} from "../../models/task";
import {CreateTaskModel} from "./create-task-model";

import {TaskService} from "../service/task.service";

@Component({
  selector: "app-create-modal",
  templateUrl: "./create-modal.component.html",
  styleUrls: ["./create-modal.component.css"]
})
export class CreateModalComponent implements OnInit {

  @Output() taskCreated: EventEmitter<ITask> = new EventEmitter<ITask>();


  public taskModel: ITask;
  public tagEntry: string;

  constructor(private taskService: TaskService) {
    this.taskModel = new CreateTaskModel("", "", new Set<string>(), "");
    this.tagEntry = "";
  }

  ngOnInit() {
  }

  createTask(): void {
      console.log(this.taskModel);
      this.taskService.createTask(this.taskModel).subscribe(
        data => {
          this.taskCreated.emit(data);
          console.log("Emitting event");
        },
        error => {
          console.log(error);
        }
      );
  }

  addTag() {
    if (this.tagEntry !== null && this.tagEntry !== "" && !this.taskModel.tags.has(this.tagEntry)) {
      this.taskModel.tags.add(this.tagEntry);
    }
  }

  removeTag(event: MouseEvent) {
    const tagName = (event.target as HTMLElement).parentNode.previousSibling.textContent.trim();
    if (this.taskModel.tags.has(tagName)) {
      this.taskModel.tags.delete(tagName);
    }
  }

}
