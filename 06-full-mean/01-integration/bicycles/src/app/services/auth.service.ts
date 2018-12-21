import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { User } from '../models';
// import { request } from 'https';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly base = '/api/auth';

  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) { }
  login(user: User): Observable<User> {
    console.log('from service login', user);
    return this.http.post<User>(`${this.base}/login`, user);
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/register`, user);
  }
  logout(): Observable<boolean> {
    return this.http.delete<boolean>(`${this.base}/logout`);
  }
  // isAuthed takes all the cookies we've created and checks to see if we're still authorized
  isAuthed(): boolean {
    const id = this.getUserId();
    const expired = parseInt(this.cookieService.get('expiration'), 10); // parseInt turns into integer
    const session = this.cookieService.get('session');

    return id && expired && session && expired > Date.now();
    // expired > Date.new() checks this against the current time
  }
  getUser(id: string): Observable<User> {
    // console.log('from auth service', id);
    return this.http.get<User>(`${this.base}/request.session.user._id`);
  }
  getUserId(): string {
    return this.cookieService.get('userID');
  }
}
