import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasksIcon: string = 'assets/icons/tasks_icon.png';
  plannerIcon: string = 'assets/icons/planner_icon.png';
  analyticsIcon: string = 'assets/icons/analytics_icon.png';
  settingsIcon: string = 'assets/icons/settings_icon.png';

  tasksTitle: string = 'My Tasks';
  plannerTitle: string = 'Planner';
  analyticsTitle: string = 'Analytics';
  settingsTitle: string = 'Settings';

  userName: string = "Huskit8520g";
  firstName: string = "";
  lastName: string = "";

  constructor() { }

  ngOnInit() {
  }

}
