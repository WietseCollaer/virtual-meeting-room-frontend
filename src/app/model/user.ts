import {MeetingRoom} from './meeting-room';

export interface User {
  id: string;
  name: string;
  meetingRoom: MeetingRoom;
}
