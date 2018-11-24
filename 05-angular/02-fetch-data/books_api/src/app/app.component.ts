import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Author } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'authors';
  authors = [];
  constructor(private httpService: HttpService) { }
  ngOnInit() {
     this.getAuthorsFromService();
  }
  getAuthorsFromService() {
    const tempObservable = this.httpService.getAuthors();
    tempObservable.subscribe(data => {
      console.log('got our authors', data);
      this.authors.push(data);
      console.log(this.authors);
    });
  }
  // createNewAuthor(author: Author): Observable<Author> {
  //   const  this.httpService.post<Author>('/');
//  observable.subscribe(data => console.log('new author', data));
// }
}
