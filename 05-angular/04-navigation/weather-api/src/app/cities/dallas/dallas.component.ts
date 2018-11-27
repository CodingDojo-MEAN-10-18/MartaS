import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather;
  status;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getDallas();
  }
  getDallas() {
    this.weatherService.getWeather('dallas').subscribe(data => {
      console.log(data);
      this.weather = data['main'];
      this.status = data['weather'][0];
      console.log(this.weather);
      console.log(this.status);
    });
  }
}
