// booking-feature-shell.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { BookingDataAccessModule } from '@nrwl-airlines/booking/data-access';
import { SharedDataAccessModule } from '@nrwl-airlines/shared/data-access';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'flight-search',
      },
      {
        path: 'flight-search',
        loadChildren: () =>
          import('@nrwl-airlines/booking/feature-flight-search')
            .then(esModule => esModule.BookingFeatureFlightSearchModule),
      },
      {
        path: 'passenger-info',
        loadChildren: () => import('@nrwl-airlines/booking/feature-passenger-info')
          .then(({ BookingFeaturePassengerInfoModule }) => BookingFeaturePassengerInfoModule)
      }
    ],
  },
];

@NgModule({
  declarations: [ShellComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    SharedDataAccessModule,
    BookingDataAccessModule,
    CommonModule,
  ],
})
export class BookingFeatureShellModule {}
