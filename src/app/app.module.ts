import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigimonsComponent } from './digimons/digimons.component';
import { DigimonsServices } from './digimons/digimons.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DigimonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DigimonsServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
