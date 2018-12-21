import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bike, User } from '../../models';
import { BikeService, AuthService } from '../../services';

@Component({
  selector: 'app-bike-new',
  templateUrl: './bike-new.component.html',
  styleUrls: ['./bike-new.component.css']
})
export class BikeNewComponent implements OnInit {
  bike: Bike = new Bike();
  mylist: Bike[] = [];
  user;
  //   User = new User();
  // = new User();
  errors: string[] = [];

  @Output()
  createBike = new EventEmitter<Bike>();
  getUser = new EventEmitter<User>();

  constructor(
    private readonly bikeService: BikeService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    const id = this.authService.getUserId();
    this.authService.getUser(this.user).subscribe(user => {
      this.user = user;
      console.log('from init', this.user);
    });
    this.bikeService.getMyBikes(id).subscribe(bikes => {
      console.log(bikes);
      this.mylist = bikes;
    });
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.errors = [];
    console.log('submitting bike', this.bike);

    this.bikeService.createBike(this.bike).subscribe((newBike) => {
      this.createBike.emit(this.bike);
      console.log('new bike', newBike);
      this.bike = newBike;
      this.mylist.push(this.bike);
      // this.authService.getUser(this.user).subscribe(user => {
      //   console.log('user before push', user);
      // this.user.bikes.push(this.bike);
      //   console.log('after push', this.user);
      this.bike = new Bike;

      // this.getUser.emit(this.user);

      this.router.navigateByUrl('/bikes/new'); // eventually need to edit this so i stay on the same page
      // });
    },
      errors => {
        console.log('error', errors);
        this.errors = [errors.error];
      });
  }

  getMyBikes(id: string) {
    this.authService.getUserId();
  }
  // onEdit(event: Event, form: NgForm) {
  //   event.preventDefault();
  //   console.log('clicked on author:', this.bike);
  //   this.bikeService.updateBike(this.bike).subscribe(updatedBike => {
  //     console.log('updated author', updatedBike);
  //     this.bike = new Bike;

  //   },
  //     error => {
  //       console.log('error', error);
  //       this.errors = error.error;
  //     }
  //   );
  // }
}


