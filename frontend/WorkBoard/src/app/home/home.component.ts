import {Component, OnInit} from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
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

  constructor() {
  }

  ngOnInit() {
  }

  onMouseEnter(): void {
    $(".container-fluid").stop().dequeue().delay(350).animate({
      width: "15vw"
    }, {
      duration: "200",
      easing: "swing"
    });
  }

  onMouseLeave(): void {
    $(".container-fluid").stop().dequeue().delay(200).animate({
      width: "5vw"
    }, {
      duration: "200",
      easing: "swing"
    });
  }

}
