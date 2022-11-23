import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskComponent } from './desk/desk.component';
import { SampleComponent } from './sample/sample.component';
import { AboutComponent } from './about/about.component';
import { CurrentdateComponent } from './currentdate/currentdate.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskComponent,
    SampleComponent,
    AboutComponent,
    CurrentdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
