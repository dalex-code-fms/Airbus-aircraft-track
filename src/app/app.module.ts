import { HttpClientModule } from '@angular/commom/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.compongnent';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
