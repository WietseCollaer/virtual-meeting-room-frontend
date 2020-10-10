import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateUser} from '../model/create-user';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  createUser(createUser: CreateUser): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8080/createUser', createUser);
  }
}
