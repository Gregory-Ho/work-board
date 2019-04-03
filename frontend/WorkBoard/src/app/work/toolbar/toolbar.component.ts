import {Component, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {CreateModalComponent} from "../create-modal/create-modal.component";
import {CreateTaskModel} from "../create-modal/create-task-model";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {

  @Output() searchEntered: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(CreateModalComponent) modal: CreateModalComponent;

  constructor() {
  }

  ngOnInit() {
  }

  set searchString(value: string) {
    this.searchEntered.emit(value);
  }

  initializeModal(): void {
    this.modal.taskModel = new CreateTaskModel("", "", new Set<string>(), null);
    this.modal.tagEntry = "";
    console.log(this.modal.taskModel.dueDate);
  }
}
