import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Author } from '../models';

@Injectable(
   {
   providedIn: 'root'
 }
)
export class AuthorService {
  private base = '/api/authors';

  constructor(private http: HttpClient) {   }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.base);
  }

  createAuthor(author: Author): Observable<Author> {
    console.log('from service', author);
    return this.http.post<Author>(this.base, author);
  }

  removeAuthor(id: number): Observable<Author> {
    return this.http.delete<Author>(`${this.base}/${id}`);
  }

  updateAuthor(author: Author): Observable<Author> {
     return this.http.put<Author>(`${this.base}/${author._id}`, author);
  }

  getAuthor(id: string): Observable<Author> {
     return this.http.get<Author>(`${this.base}/${id}`);
  }
}
