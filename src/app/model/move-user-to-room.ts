import {User} from './user';

export interface MoveUserToRoom {
  user: User;
  newMeetingRoomId: string;
}
