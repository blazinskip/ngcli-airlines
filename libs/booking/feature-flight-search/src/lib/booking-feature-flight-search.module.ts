import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FlightSearchComponent,
  },
];

@NgModule({
  declarations: [FlightSearchComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BookingFeatureFlightSearchModule { }
