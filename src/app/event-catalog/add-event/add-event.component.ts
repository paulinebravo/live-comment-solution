import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from '../../service/event.service';

@Component({
  selector:'app-add-event',
  templateUrl:'./add-event.component.html',
  styleUrls:[ './add-event.component.css' ]
})
export class AddEventComponent implements OnInit {
  @Output() eventAdded = new EventEmitter();
  @Input() eventsNumber;

  private category;
  private eventTitle;
  private eventDate;

  constructor(private eventService:EventService) {

  }

  ngOnInit() {
  }

  addEvent(event) {
    console.log(this.category);
    console.log(this.eventTitle);
    console.log(this.eventDate);

    let newEvent = Object.assign({},
      {id: this.eventsNumber},
      this.category ? { category: this.category } : null,
      this.eventTitle ? { title: this.eventTitle } : null,
      this.eventDate ? { date: this.eventDate } : null
    )
    console.log('event', newEvent);
    this.eventService.addEvent(newEvent).subscribe(response => this.eventAdded.emit(response));
  }
}
