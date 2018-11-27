import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather;
  status;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getChicago();
  }
  getChicago() {
    this.weatherService.getWeather('chicago').subscribe(data => {
      console.log(data);
      this.weather = data['main'];
      this.status = data['weather'][0];
      console.log(this.weather);
      console.log(this.status);
    });
  }
}

