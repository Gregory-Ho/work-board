import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {

  @Output() searchEntered: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  set searchString(value: string) {
    this.searchEntered.emit(value);
  }

}
