import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatSvgComponent } from './seat-svg/seat-svg.component';
import { StepGifComponent } from './step-gif/step-gif.component';
import { SeatSearchComponent } from './seat-search/seat-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatSvgComponent,
    StepGifComponent,
    SeatSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
