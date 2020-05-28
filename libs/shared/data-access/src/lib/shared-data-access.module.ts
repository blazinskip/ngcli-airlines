import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './+state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@nrwl-airlines/shared/environments';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './+state/app.effects';

@NgModule({
  declarations: [],
  imports: [
  StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])]
})
export class SharedDataAccessModule { }
