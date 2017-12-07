import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event.service';

@Component({
  selector:'app-event-comments',
  templateUrl:'./event-comments.component.html',
  styleUrls:[ './event-comments.component.css' ]
})
export class EventCommentsComponent implements OnInit, OnDestroy {


  event;
  comments:any[] = [];
  id:number;
  private sub:any;

  constructor(private route:ActivatedRoute,
              private eventService:EventService,
              private router:Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params[ 'id' ];
      console.log(this.id);
      this.eventService.getEventById(this.id).subscribe(response => this.event = response);
      this.eventService.getCommentsByEventId(this.id).subscribe((response: any[]) => {
        console.log(response);
        this.comments = response;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  refreshComments() {
    this.eventService.getCommentsByEventId(this.id).subscribe((response: any[]) => {
      this.comments = response;
    });
  }

}
