import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  getAuthors() {
    return this.http.get('/authors');
  }
  CreateAuthor(author) {
    return this.http.post('/authors', author);
  }
}
