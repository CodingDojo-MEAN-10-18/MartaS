import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services';
import { Bike } from '../../models';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  bikes: Bike[] = [];

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeService.getBikes().subscribe(bikes => {
      this.bikes = [...bikes];
      console.log('bike list', this.bikes);
    });
  }

}
