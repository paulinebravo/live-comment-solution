import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
  private events;

  constructor(private http: HttpClient) {

  }

  getEvents() {
    return this.http.get('http://eventsmanagement.getsandbox.com/events');
  }

  getEventById(id) {
    return this.http.get('http://eventsmanagement.getsandbox.com/events/' + id);
  }

  addEvent(event) {
    return this.http.post('http://eventsmanagement.getsandbox.com/events', event);
  }

  getCommentsByEventId(eventId) {
    console.log(eventId);
    return this.http.get('http://eventsmanagement.getsandbox.com/comments/' + eventId);
  }

  addComment(comment) {
    return this.http.post('http://eventsmanagement.getsandbox.com/comments', comment);
  }
}
