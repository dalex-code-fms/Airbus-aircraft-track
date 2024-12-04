import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Aircrafts } from './model/aircrafts';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AircraftsEffects } from './ngrx/aircrafts.effects';
import { AircraftReducer } from './ngrx/aircrafts.reducer';

@NgModule({
  declarations: [AppComponent, LoginComponent, AircraftsComponent, AircraftsNavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,
    StoreModule.forRoot({airbusState : AircraftReducer}),
    EffectsModule.forRoot([AircraftsEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
