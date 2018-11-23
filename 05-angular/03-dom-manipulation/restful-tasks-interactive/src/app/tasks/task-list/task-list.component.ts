import { Component, OnInit } from '@angular/core';

import { Task } from '../../models';
import { TaskService } from '../../services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  //  this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }
  onSelect(task: Task): void {
    console.log('selected', task);
    if (this.selectedTask === task) {
      this.selectedTask = null;
    } else { // if else here is so we can toggle when item is clicked/unclicked
      this.selectedTask = task;
    }
  }
    // same as above: this.selectedTask = this.selectedTask === task ? null : task;

  onCreate(task: Task) {
    console.log('creating task', task);
    // this.taskService.createTask(task).subscribe(createdTask => {
    //   console.log(' created task?', createdTask);
    //  this.tasks.push(createdTask);
    this.tasks.push(task);
    console.log('tasks array', this.tasks);

    // console.log('from oncreate task-list', this.tasks);
    //  this.tasks = [...this.tasks, createdTask];
    // });
  }
    /* to avoid detail being shown when delete is clicked on same line as item
    onEvent(event: Event): void {
      console.log('eventing...');
      event.stopPropagation
    */
  }

