import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather;
  status;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getDC();
  }
  getDC() {
    this.weatherService.getWeather('district+of+columbia').subscribe(data => {
      console.log(data);
      this.weather = data['main'];
      this.status = data['weather'][0];
      console.log(this.weather);
      console.log(this.status);
    });
  }
}
