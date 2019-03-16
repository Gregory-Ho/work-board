import {Component, OnInit} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeIcon: string = 'assets/icons/logo_icon.png';
  tasksIcon: string = 'assets/icons/tasks_icon.png';
  plannerIcon: string = 'assets/icons/planner_icon.png';
  analyticsIcon: string = 'assets/icons/analytics_icon.png';
  settingsIcon: string = 'assets/icons/settings_icon.png';

  homeTitle: string = 'Home';
  tasksTitle: string = 'My Tasks';
  plannerTitle: string = 'Planner';
  analyticsTitle: string = 'Analytics';
  settingsTitle: string = 'Settings';

  constructor() {
  }

  ngOnInit() {
  }

  // Remove the delays if touch device
  onMouseEnter(): void {
    $('.container-fluid').dequeue().stop().delay(350).animate({
      width: '15vw'
    }, {
      duration: '200',
      easing: 'swing'
    });
  }

  onMouseLeave(): void {
    $('.container-fluid').dequeue().stop().delay(350).animate({
      width: '5vw'
    }, {
      duration: '200',
      easing: 'swing'
    });
  }

}
