import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PassengerInfoComponent,
  },
];


@NgModule({
  declarations: [PassengerInfoComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BookingFeaturePassengerInfoModule { }
