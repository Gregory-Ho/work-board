import {Component, OnInit} from "@angular/core";
import {ITask} from "../models/task";
import {TaskService} from "./service/task.service";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.css"]
})
export class WorkComponent implements OnInit {

  private tasksToDisplay: ITask[];
  private allTasks: ITask[];
  private gotError = true;

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

  filterTasks(searchString: string): void {
    searchString = searchString.toLocaleLowerCase();
    this.tasksToDisplay = this.allTasks.filter((task: ITask) => task.summary.toLocaleLowerCase().includes(searchString));
  }
}
