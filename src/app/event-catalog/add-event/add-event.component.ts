import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from '../../service/event.service';
import {MatFormFieldControl} from '@angular/material';



@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: [ './add-event.component.css' ],
  providers: [{provide: MatFormFieldControl, useExisting: AddEventComponent}]
})
export class AddEventComponent implements OnInit {
  @Output() eventAdded = new EventEmitter();
  @Input() eventsNumber;

  private category;
  private eventTitle;
  private eventDate;
  private eventHour;
  private eventMin;

  constructor(private eventService: EventService) {

  }

  ngOnInit() {
  }

  addEvent(event) {
    console.log(this.category);
    console.log(this.eventTitle);
    console.log(this.eventDate);

    const newEvent = Object.assign({},
      {id: this.eventsNumber},
      this.category ? { category: this.category } : null,
      this.eventTitle ? { title: this.eventTitle } : null,
      this.eventDate ? { date: this.eventDate } : null,
      this.eventHour ? { hour: this.eventHour } : null,
      this.eventMin ? { min: this.eventMin } : null,


    );
    console.log('event', newEvent);
    this.eventService.addEvent(newEvent).subscribe(response => this.eventAdded.emit(response));
  }
}
