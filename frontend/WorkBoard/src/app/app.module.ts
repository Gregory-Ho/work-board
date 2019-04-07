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
import { ConvertToDueInPipe } from './work/convert-to-due-in.pipe';
import { CreateModalComponent } from './work/create-modal/create-modal.component';
import { TaskDetailComponent } from './work/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NavComponent,
    HomeComponent,
    ToolbarComponent,
    WorkComponent,
    ConvertToDueInPipe,
    CreateModalComponent,
    TaskDetailComponent
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
