import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { QuillModule } from 'ngx-quill';

import { AddEventComponent } from './event-catalog/add-event/add-event.component';
import { EventListComponent } from './event-catalog/event-list/event-list.component';
import { PostMessageComponent } from './event-comments/post-message/post-message.component';
import { TimeLineComponent } from './event-comments/time-line/time-line.component';
import { EventCatalogComponent } from './event-catalog/event-catalog.component';
import { EventService } from './service/event.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventCommentsComponent } from './event-comments/event-comments.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    EventListComponent,
    PostMessageComponent,
    TimeLineComponent,
    EventCatalogComponent,
    EventCommentsComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DateTimePickerModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    QuillModule,
    HttpClientModule,



  ],

  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    DateTimePickerModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    QuillModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
