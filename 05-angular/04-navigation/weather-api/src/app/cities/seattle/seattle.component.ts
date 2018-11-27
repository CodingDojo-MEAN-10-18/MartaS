import { Component, OnInit } from '@angular/core';

import { Weather } from '../../models';
import { WeatherService } from '../../services';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather;
  status;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getSeattle();
  }
  getSeattle() {
    this.weatherService.getWeather('seattle').subscribe(data => {
      console.log(data);
      this.weather = data['main'];
      this.status = data['weather'][0];
      console.log(this.weather);
      console.log(this.status);
    });
  }
}
