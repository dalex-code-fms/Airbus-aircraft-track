import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Aircrafts } from './model/aircrafts';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AircraftsEffects } from './ngrx/aircrafts.effects';
import { AircraftReducer } from './ngrx/aircrafts.reducer';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginReducer } from './ngrx/login.reducer';
import { LoginComponent } from './components/login/login.component';
import { LoginAction } from './model/login';
import { LoginEffects } from './ngrx/login.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AircraftsComponent,
    AircraftsNavbarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ airbusState: AircraftReducer, login: LoginReducer }),
    EffectsModule.forRoot([AircraftsEffects, LoginEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
