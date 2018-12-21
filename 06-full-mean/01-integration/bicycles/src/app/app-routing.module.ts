import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromBikes from './bikes';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'bikes',
    component: fromBikes.BikeListComponent,
  },
  {
    path: 'bikes/new',
    component: fromBikes.BikeNewComponent,
  },
  {
    path: 'bikes/mylistings',
    component: fromBikes.BikeMylistingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
