import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {User} from '../model/user';
import {MoveUserToRoom} from '../model/move-user-to-room';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomWebSocketService {

  webSocketEndPoint = 'http://localhost:8080/ws';
  topic = '/meetingroom/overview';
  stompClient: any;
  users: User[] = [];

  constructor() {
    this.connect();
  }

  connect(): Observable<any> {
    console.log('Initialize websocket connection');
    const ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const that = this;
    return that.stompClient.connect({}, (frame) => {
      that.stompClient.subscribe(that.topic, (message) => {
        that.onMessageReceived(message);
      });
    }, that.errorCallBack);
  }

  disconnect(): void {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected');
  }

  private errorCallBack(error): void {
    console.log('ErrorCallback -> ' + error);
    setTimeout(() => this.connect(), 5000);
  }

  moveUserToRoom(moveUserToRoom: MoveUserToRoom): void {
    console.log('calling logout api via web socket');
    this.stompClient.send('/app/moveUser', {}, JSON.stringify(moveUserToRoom));
  }

  private onMessageReceived(message: any): void {
    console.log('ReceivedMessage', message);
    this.users = JSON.parse(message.body);
  }
}
