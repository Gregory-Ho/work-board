import {Component, OnInit} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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
    $('.sideNavContainer').dequeue().stop().delay(350).animate({
      'width': '15vw',
      'max-width': '240px'
    }, {
      duration: '200',
      easing: 'swing',
      step: (now, fx) => {
        if (now >= fx.end * 0.90) {
          $('.navLinkSelector').css({
            'border-radius': '0 5vw 5vw 0'
          });
        }
      }

    });
  }

  onMouseLeave(): void {
    $('.sideNavContainer').dequeue().stop().delay(350).animate({
      'width': '5vw',
      'max-width': '80px'
    }, {
      duration: '200',
      easing: 'swing',
      step: (now, fx) => {
        if (now <= fx.start * 0.90) {
          $('.navLinkSelector').css({
            'border-radius': '0'
          });
        }
      }
    });
  }

}
