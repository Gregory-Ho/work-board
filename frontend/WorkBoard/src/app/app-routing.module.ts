import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {WorkComponent} from "./work/work.component";
import {OktaAuthGuard, OktaCallbackComponent} from "@okta/okta-angular";
import {onAuthRequired} from "./app.component";


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: 'implicit/callback', component: OktaCallbackComponent},
  {path: "home", component: HomeComponent, canActivate: [OktaAuthGuard], data: {onAuthRequired: onAuthRequired}},
  {path: "dashboard", component: WorkComponent, canActivate: [OktaAuthGuard], data: {onAuthRequired: onAuthRequired}},
  {path: "**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
