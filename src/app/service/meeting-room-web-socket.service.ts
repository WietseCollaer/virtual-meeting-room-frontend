import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MeetingRoom} from '../model/meeting-room';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomWebSocketService {

  constructor(private httpClient: HttpClient) { }

  findAllMeetingRooms(): Observable<MeetingRoom[]> {
    return this.httpClient.get<MeetingRoom[]>('http://localhost:8080/meetingrooms');
  }
}
