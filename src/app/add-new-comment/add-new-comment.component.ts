import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'add-new-comment',
  templateUrl: './add-new-comment.component.html',
  styleUrls: ['./add-new-comment.component.scss']
})
export class AddNewCommentComponent implements OnInit {

  content: string = '';
  currentUser: any = {}
  comments: any = [];

  @Input() replyTo: string = '';
  @Input() commentID: number = 0;

  constructor(public data: DataService) {
  }

  ngOnInit(): void {
    this.currentUser = this.data.getCurrentUser();
    this.comments = this.data.getComments();
    this.content = '';
  }


  addNewComment(): void {
    // calculate the new id 
    let newId = 1;
    for (var el in this.comments) {
      newId++;
      if (this.comments[el].replies.length > 0) {
        newId += this.comments[el].replies.length
      }
    }
    let newComment;
    if (this.commentID === 0) {
      newComment = {
        id: newId,
        content: this.content,
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
      this.comments.push(newComment);

    } else {
      for (var el in this.comments) {
        if (this.comments[el].id === this.commentID) {
          newComment = {
            id: newId,
            content: this.content,
            createdAt: "1 sec ago",
            score: 0,
            user: {
              image: {
                png: this.currentUser.image.png,
                webp: this.currentUser.image.webp
              },
              username: this.currentUser.username
            },
            replyingTo: this.replyTo,
          }
          this.comments[el].replies.push(newComment);
        }
      }
    }
    this.data.saveState(this.comments);
    location.reload();
    this.content = '';
  }

}


