// booking-feature-shell.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { BookingDataAccessModule } from '@nrwl-airlines/booking/data-access';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [],
  },
];

@NgModule({
  declarations: [ShellComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    BookingDataAccessModule,
    CommonModule,
  ],
})
export class BookingFeatureShellModule {}
