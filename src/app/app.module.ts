import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppShareModule } from 'src/app/app-share/app-share.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
