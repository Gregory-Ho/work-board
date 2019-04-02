import {Component, OnInit} from "@angular/core";
import {ITask} from "../../models/task";
import {CreateTaskModel} from "./create-task-model";

import * as $ from "jquery";

@Component({
  selector: "app-create-modal",
  templateUrl: "./create-modal.component.html",
  styleUrls: ["./create-modal.component.css"]
})
export class CreateModalComponent implements OnInit {

  private taskModel: ITask;
  private tagEntry: string;

  constructor() {
    this.taskModel = new CreateTaskModel("", "", new Set<string>(), "");
    this.tagEntry = "";
  }

  clearForm(): void {
    this.taskModel = new CreateTaskModel("", "", new Set<string>(), "");
    this.tagEntry = "";
  }

  ngOnInit() {
  }

  createTask(): void {
      console.log(this.taskModel);
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
