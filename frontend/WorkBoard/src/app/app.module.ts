import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {TaskListComponent} from "./work/task-list/task-list.component";
import {NavComponent} from "./nav/nav.component";

import {$} from "jquery";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {ToolbarComponent} from "./work/toolbar/toolbar.component";
import {WorkComponent} from "./work/work.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NavComponent,
    HomeComponent,
    ToolbarComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
