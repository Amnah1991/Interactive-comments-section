import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CounterComponent } from './counter/counter.component';
import { AddNewCommentComponent } from './add-new-comment/add-new-comment.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CounterComponent,
    AddNewCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
