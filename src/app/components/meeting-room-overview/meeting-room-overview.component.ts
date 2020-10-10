import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {MeetingRoom} from '../../model/meeting-room';
import {MeetingRoomWebSocketService} from '../../service/meeting-room-web-socket.service';

@Component({
  selector: 'app-meeting-room-overview',
  templateUrl: './meeting-room-overview.component.html',
  styleUrls: ['./meeting-room-overview.component.scss']
})
export class MeetingRoomOverviewComponent implements OnInit {

  user: User;
  meetingRooms: MeetingRoom[];
  private readonly DEFAULT_MEETING_ROOM_NAME = 'Hallway';

  constructor(private meetingRoomService: MeetingRoomService,
              private meetingRoomWebSocketService: MeetingRoomWebSocketService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.meetingRoomService.findAllMeetingRooms()
      .subscribe(meetingRooms => {
        this.meetingRooms = meetingRooms;
        this.meetingRoomWebSocketService.moveUserToRoom({
          user: this.user,
          newMeetingRoomId: this.findIdOfDefaultMeetingRoom().id
        });
      });
  }

  private findIdOfDefaultMeetingRoom(): MeetingRoom {
    return this.meetingRooms
      .find(room => room.name === this.DEFAULT_MEETING_ROOM_NAME);
  }

  usersInMeetingRoom(meetingRoomId: string): User[] {
    console.log('Users in room',
      this.meetingRoomWebSocketService.users
        .filter(user => user.meetingRoom.id === meetingRoomId)
    );

    return this.meetingRoomWebSocketService.users
      .filter(user => user.meetingRoom.id === meetingRoomId);
  }

  goToMeetingRoom(): void {

  }
}
