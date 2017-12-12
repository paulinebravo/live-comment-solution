import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @Input() events;

  selectedEvent: Event;

  constructor() { }

  ngOnInit() {

  }
  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
}
