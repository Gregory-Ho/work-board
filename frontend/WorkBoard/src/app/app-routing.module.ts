import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {WorkComponent} from "./work/work.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "dashboard", component: WorkComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
