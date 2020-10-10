import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setup-user-component',
  templateUrl: './setup-user.component.html',
  styleUrls: ['./setup-user.component.scss']
})
export class SetupUserComponent {
  name: string;

  constructor(private userService: UserService,
              private router: Router) { }

  createUser(): void {
    console.log('clicked');
    this.userService.createUser({name: this.name})
      .subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/meeting-room-overview');
      });
  }
}
