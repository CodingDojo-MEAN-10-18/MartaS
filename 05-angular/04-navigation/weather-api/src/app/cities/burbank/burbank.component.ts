import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather;
  status;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getBurbank();
  }
  getBurbank() {
    this.weatherService.getWeather('burbank').subscribe(data => {
      console.log(data);
      this.weather = data['main'];
      this.status = data['weather'][0];
      console.log(this.weather);
      console.log(this.status);
    });
  }
}
