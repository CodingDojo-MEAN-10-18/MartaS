import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import * as fromTasks from './tasks';
import * as fromServices from './services';

import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskNewComponent } from './tasks/task-new/task-new.component';


@NgModule({
  declarations: [AppComponent, ...fromTasks.components],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule { }
