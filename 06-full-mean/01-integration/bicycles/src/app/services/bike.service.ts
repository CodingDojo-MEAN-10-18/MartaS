import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Bike } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private base = '/api/bikes';

  constructor(private http: HttpClient) { }

  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.base);
  }

  createBike(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.base, bike);
  }

  getMyBikes(id: string): Observable<Bike[]> {
     return this.http.get<Bike[]>(`${this.base}/${id}`);
  }
  // updateBike(bike: Bike): Observable<Bike> {
  //   return this.http.put<Bike>(`${this.base}/${bike._id}`, bike);
  // }

}
