// note I did not end up using taskservice for this restful-tasks-interactive
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { Task } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks');
  }
  createTask(task: Task): Observable<Task> {
    console.log('from service', task);
    return this.http.post<Task>('/tasks', task);
  }
}
