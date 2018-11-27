import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromWeather from './cities';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'seattle',
    pathMatch: 'full',
  },
  {
    path: 'seattle',
    component: fromWeather.SeattleComponent,
  },
  {
    path: 'burbank',
    component: fromWeather.BurbankComponent,
  },
  {
    path: 'sanjose',
    component: fromWeather.SanjoseComponent,
  },
  {
    path: 'chicago',
    component: fromWeather.ChicagoComponent,
  },
  {
    path: 'dallas',
    component: fromWeather.DallasComponent,
  },
  {
    path: 'dc',
    component: fromWeather.DcComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
