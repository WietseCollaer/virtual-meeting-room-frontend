import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MeetingRoomOverviewComponent } from './components/meeting-room-overview/meeting-room-overview.component';
import { SetupUserComponent } from './components/setup-user-component/setup-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingRoomOverviewComponent,
    SetupUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
