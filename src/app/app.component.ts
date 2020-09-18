import {Component, OnInit} from '@angular/core';
import {MeetingRoomWebSocketService} from './service/meeting-room-web-socket.service';
import {MeetingRoom} from './model/meeting-room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  meetingRooms: MeetingRoom[];

  constructor(private meetingRoomWebSocketService: MeetingRoomWebSocketService) {
  }

  ngOnInit(): void {
    this.meetingRoomWebSocketService.findAllMeetingRooms().subscribe(meetingRooms => this.meetingRooms = meetingRooms);
  }

}
