import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {TaskListComponent} from "./work/task-list/task-list.component";
import {NavComponent} from "./nav/nav.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {ToolbarComponent} from "./work/toolbar/toolbar.component";
import {WorkComponent} from "./work/work.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ConvertToDueInPipe} from './work/convert-to-due-in.pipe';
import {CreateModalComponent} from './work/create-modal/create-modal.component';
import {TaskDetailComponent} from './work/task-detail/task-detail.component';
import {CommonModule} from '@angular/common';
import {DeleteTaskConfirmationModalComponent} from './work/task-detail/delete-task-confirmation-modal/delete-task-confirmation-modal.component';
import {OktaAuthModule} from '@okta/okta-angular';
import {AuthInterceptor} from "./shared/auth.interceptor";

const config = {
  issuer: 'https://dev-809274.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oak7b25rz1AHlzxC356'
}

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
    TaskDetailComponent,
    DeleteTaskConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
