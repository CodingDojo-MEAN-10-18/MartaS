import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getTasksFromService();
  }

  getTasksFromService() {
    const tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      console.log('Got our tasks', data);
      for (let i = 0; i < data['length']; i++) {
        this.tasks.push(data[i]);
      }
    });
  }
}
