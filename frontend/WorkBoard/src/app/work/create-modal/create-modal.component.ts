import {Component, OnInit} from "@angular/core";
import {ITask} from "../../models/task";
import {CreateTaskModel} from "./create-task-model";

@Component({
  selector: "app-create-modal",
  templateUrl: "./create-modal.component.html",
  styleUrls: ["./create-modal.component.css"]
})
export class CreateModalComponent implements OnInit {

  private taskModel: ITask = new CreateTaskModel("", "", [], "");
  private tagEntry: string = "";

  constructor() {
  }

  ngOnInit() {
  }

  createTask(): void {
    console.log(this.taskModel);
  }

  addTag() {
    if (this.tagEntry !== null) {
      this.taskModel.tags.push(this.tagEntry);
    }
  }

  removeTag() {

  }

}
