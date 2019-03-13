import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private homeIcon: string = "assets/icons/logo_icon.png";
  private tasksIcon: string = "assets/icons/tasks_icon.png";
  private plannerIcon: string = "assets/icons/planner_icon.png";
  private analyticsIcon: string = "assets/icons/analytics_icon.png";
  private settingsIcon: string = "assets/icons/settings_icon.png";

  private homeTitle: string = "Home";
  private tasksTitle: string = "My Tasks";
  private plannerTitle: string = "Planner";
  private analyticsTitle: string = "Analytics";
  private settingsTitle: string = "Settings";

  constructor() { }

  ngOnInit() {
  }

}
