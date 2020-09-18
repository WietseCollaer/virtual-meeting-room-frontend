import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeetingRoomOverviewComponent} from './components/meeting-room-overview/meeting-room-overview.component';
import {SetupUserComponent} from './components/setup-user-component/setup-user.component';

const routes: Routes = [
  {
    path: 'meeting-room-overview', component: MeetingRoomOverviewComponent
  },
  {
    path: '', component: SetupUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
