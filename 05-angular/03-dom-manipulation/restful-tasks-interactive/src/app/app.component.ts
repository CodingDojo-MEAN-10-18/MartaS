// import { HttpService } from './http.service';
import { Component } from '@angular/core';
import { Task } from './models';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tasks';
}

  /*
  implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getTasksFromService();
  }

  getTasksFromService() {
    const tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      // console.log('Got our tasks', data);
      for (let i = 0; i < data['length']; i++) {
        this.tasks.push(data[i]);
        // console.log(this.tasks);
      }
    });
  }
}
*/
