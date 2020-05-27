import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromBooking from './+state/booking.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookingEffects } from './+state/booking.effects';



@NgModule({
  declarations: [],
  imports: [
  StoreModule.forFeature(fromBooking.bookingFeatureKey, fromBooking.reducer),
  EffectsModule.forFeature([BookingEffects])]
})
export class BookingDataAccessModule { }
