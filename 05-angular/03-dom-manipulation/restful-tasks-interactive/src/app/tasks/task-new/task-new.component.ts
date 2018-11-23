import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Task } from '../../models';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  task: Task = new Task();
  // tasks: Task[] = [];

  @Output()
  createTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() { }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    // console.log('submitting task from form', this.task);

    this.createTask.emit(this.task);
    this.task = new Task(); // reassign this.task to a New task so when we reset the form, we don't reset and lose this.task

    // console.log('task array', this.tasks);
    form.reset();
  }

}
