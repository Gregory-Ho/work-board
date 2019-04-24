import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from "../../models/task";
import {CreateTaskModel} from "./create-task-model";

import {TaskService} from "../service/task.service";

@Component({
  selector: "app-create-modal",
  templateUrl: "./create-modal.component.html",
  styleUrls: ["./create-modal.component.css"]
})
export class CreateModalComponent implements OnInit {

  @Output() submittedTaskModel: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() tagEntryChange: EventEmitter<string> = new EventEmitter();
  @Input() tagEntry: string = "";
  @Input() modalId: string = null;
  @Input() taskModel: ITask = new CreateTaskModel("", "", [], "");

  constructor() {
  }

  ngOnInit() {
  }

  handleSubmit(): void {
    this.submittedTaskModel.emit(this.taskModel);
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

  handleTagEntryChange() {
    this.tagEntryChange.emit(this.tagEntry);
  }

}
