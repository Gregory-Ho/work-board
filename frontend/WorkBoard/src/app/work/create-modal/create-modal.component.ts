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
    this.taskModel = new CreateTaskModel("", "", [], "");
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
    if (this.tagEntry !== null && this.tagEntry !== "" && !this.taskModel.tags.includes(this.tagEntry)) {
      this.taskModel.tags.push(this.tagEntry);
      this.tagEntry = "";
    }
  }

  removeTag(event: MouseEvent) {
    const tagName = (event.target as HTMLElement).parentNode.previousSibling.textContent.trim();
    if (this.taskModel.tags.includes(tagName)) {
      this.taskModel.tags.splice(this.taskModel.tags.indexOf(tagName), 1);
    }
  }

}
