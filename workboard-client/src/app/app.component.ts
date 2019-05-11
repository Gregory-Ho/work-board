import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {OktaAuthService} from "@okta/okta-angular";

export function onAuthRequired(oktaAuth: OktaAuthService, router: Router) {
  oktaAuth.loginRedirect();
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(public router: Router, public oktaAuth: OktaAuthService){
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => {
        this.isAuthenticated = isAuthenticated;}
    );
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }
}
