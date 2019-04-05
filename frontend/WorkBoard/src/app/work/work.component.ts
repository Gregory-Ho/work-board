import {Component, OnInit} from "@angular/core";
import {ITask} from "../models/task";
import {TaskService} from "./service/task.service";

declare var $ : any;

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.css"]
})
export class WorkComponent implements OnInit {

  private tasksToDisplay: ITask[];
  private allTasks: ITask[];
  private gotError = true;
  private searchString: string = "";

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      data => {
        this.allTasks = data;
        this.gotError = false;
        this.tasksToDisplay = this.allTasks;
      },
      error => {
        console.log(error);
        this.gotError = true;
      }
    );
  }

  addTaskToList(task: ITask): void {
    this.allTasks.push(task);
    console.log("Added Task");
    this.filterTasks(this.searchString);
    $("#createModal").modal("hide");
    console.log("hiding modal");
  }

  filterTasks(searchStringInput: string): void {
    this.searchString = searchStringInput.toLocaleLowerCase();
    this.tasksToDisplay = this.allTasks.filter((task: ITask) => task.summary.toLocaleLowerCase().includes(this.searchString));
  }
}
