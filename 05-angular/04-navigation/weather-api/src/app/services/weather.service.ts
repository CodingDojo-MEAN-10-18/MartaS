import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { Weather } from '../models';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }


  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=357714d171a1a4a2aa3d8858bbefb425`);
  }
}

/*
export class WeatherService {
  private base = 'http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=357714d171a1a4a2aa3d8858bbefb425';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<Weather> {
    console.log(this.base);
    return this.http.get<Weather>(this.base);
  }
}
*/
