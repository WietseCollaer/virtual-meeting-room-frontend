import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomOverviewComponent } from './meeting-room-overview.component';

describe('MeetingRoomOverviewComponent', () => {
  let component: MeetingRoomOverviewComponent;
  let fixture: ComponentFixture<MeetingRoomOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingRoomOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRoomOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
