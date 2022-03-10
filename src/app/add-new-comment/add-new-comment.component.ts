import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'add-new-comment',
  templateUrl: './add-new-comment.component.html',
  styleUrls: ['./add-new-comment.component.scss']
})
export class AddNewCommentComponent implements OnInit {

  newComment: string = '';
  currentUser: any = {}
  comments: any = [];

  @Output() commentsChangeEvent = new EventEmitter();

  constructor(public data: DataService) {
  }

  ngOnInit(): void {
    this.currentUser = this.data.getCurrentUser();
    this.comments = this.data.getComments();
    this.newComment = '';
  }

  addNewComment() {
    // calculate the new id 
    let newId = 1;
    for (var el in this.comments) {
      newId++;
      if (this.comments[el].replies.length > 0) {
        newId += this.comments[el].replies.length
      }
    }
    let newObj = {
      id: newId,
      content: this.newComment,
      createdAt: "1 sec ago",
      score: 0,
      user: {
        image: {
          png: this.currentUser.image.png,
          webp: this.currentUser.image.webp
        },
        username: this.currentUser.username
      },
      replies: []
    }
    this.comments.push(newObj)
    this.data.saveState(this.comments);
    this.commentsChangeEvent.emit(this.data.getComments());
    this.newComment = '';
  }
}
