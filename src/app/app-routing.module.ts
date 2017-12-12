import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCatalogComponent } from './event-catalog/event-catalog.component';
import { EventCommentsComponent } from './event-comments/event-comments.component';

const routes: Routes = [
  { path: '', component: EventCatalogComponent },
  { path: 'comments/:id', component: EventCommentsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }

