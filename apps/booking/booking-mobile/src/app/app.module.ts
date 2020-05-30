import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingFeatureShellModule } from '@nrwl-airlines/booking/feature-shell';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BookingFeatureShellModule,
  ],
})
export class AppModule { }
