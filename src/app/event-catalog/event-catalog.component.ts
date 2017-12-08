import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-event-catalog',
  templateUrl: './event-catalog.component.html',
  styleUrls: [ './event-catalog.component.css' ]
})
export class EventCatalogComponent implements OnInit {
  private events = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: any[]) => this.events = events);
  }

  refreshEvents() {
    this.eventService.getEvents().subscribe((events: any[]) => this.events = events);
  }
}
