import {Component, OnInit} from "@angular/core";
import {ITask} from "../models/task";
import {TaskService} from "./service/task.service";

declare var $: any;

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.css"]
})
export class WorkComponent implements OnInit {

  private tasksToDisplay: ITask[];
  private allTasks: ITask[];
  private selectedTask: ITask = null;
  private gotErrorWhenGettingAllTasks = true;
  private gotErrorWhenGettingSelectedTaskDetail = true;
  private searchString: string = "";
  private showDetailPanel: boolean = false;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      data => {
        this.allTasks = data;
        this.gotErrorWhenGettingAllTasks = false;
        this.filterTasks("");
      },
      error => {
        console.log(error);
        this.gotErrorWhenGettingAllTasks = true;
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

  handleTaskSelected(taskId: number): void {
    this.taskService.getTaskById(taskId).subscribe(
      data => {
        this.selectedTask = data;
        this.gotErrorWhenGettingSelectedTaskDetail = false;
      },
      error => {
        console.log(error);
        this.gotErrorWhenGettingSelectedTaskDetail = true;
        alert(`Unable to open task with id #${taskId} failed. Please check the logs.`);
      }
    );
    this.showDetailPanel = true;
  }

  updateTaskInList(task: ITask): void {
    const taskIndex = this.allTasks.findIndex(x => x.id === task.id);
    this.allTasks.splice(taskIndex, 1, task);
    this.filterTasks(this.searchString);
  }

  updateTaskInListAndCloseModal(task: ITask): void {
    this.updateTaskInList(task);
    $("#updateTaskModal").modal("hide");
  }

  deleteTaskInListAndCloseModal(task: ITask): void {
    this.updateTaskInList(task);
    $("#deleteTaskModal").modal("hide");
  }

  closeDetailPanel(): void {
    this.showDetailPanel = false;
  }

  sortTasks(sortFilter): void {
    this.tasksToDisplay = this.allTasks.sort((a, b) => -1);
    console.log("sorted");
  }

  filterTasks(searchStringInput: string): void {
    this.searchString = searchStringInput.toLocaleLowerCase();
    // commented for testing purposes
    // this.tasksToDisplay = this.allTasks.filter(task => task.status === TaskStatus.ACTIVE);
    // change below to    this.tasksToDisplay
    this.tasksToDisplay = this.allTasks.filter(task => task.summary.toLocaleLowerCase().includes(this.searchString));
  }
}
