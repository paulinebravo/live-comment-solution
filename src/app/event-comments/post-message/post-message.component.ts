import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from '../../service/event.service';
import * as angular from '@angular/core';


@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: [ './post-message.component.css' ]
})
export class PostMessageComponent implements OnInit {
  @Output() postAdded = new EventEmitter();

  @Input() event;
  @Input() commentsNumber: number;
  comment;
  currentTime: number;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  post() {
    const newPost = {
      id: this.commentsNumber,
      eventId: this.event.id,
      content: this.comment,
      currentTime: this.currentTime,
    };
    this.eventService.addComment(newPost).subscribe(response => this.postAdded.emit(response));
  }
}
