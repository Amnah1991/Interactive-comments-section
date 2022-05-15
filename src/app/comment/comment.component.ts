import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { DeleteMessageComponent } from '../delete-message/delete-message.component';




@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: any = {};
  currentUser: any = {};
  comments: any;
  editFlag: boolean = false;
  replyFlag: boolean = false;


  constructor(public data: DataService) {
  }



  ngOnInit(): void {
    this.currentUser = this.data.getCurrentUser();
    this.comments = this.data.getComments();
  }

  scoreChange(event: number) {
    this.comment.score = event;
    // save state
    if (this.comment.replyingTo) {
      for (let i = 0; i < this.comments.length; i++) {
        if (this.comments[i].replies.length > 0) {
          for (let j = 0; j < this.comments[i].replies.length; j++) {
            if (this.comments[i].replies[j].id === this.comment.id) {
              this.comments[i].replies[j].score = event;
              this.data.saveState(this.comments);
              break;
            }
          }
        }
      }
    } else {
      for (let i = 0; i < this.comments.length; i++) {
        if (this.comments[i].id === this.comment.id) {
          this.comments[i].score = event;
          this.data.saveState(this.comments);
          break;
        }
      }
    }
  }

  replyAtcomment(comment: any): void {
    this.replyFlag = !this.replyFlag;
  }


  edit() {
    this.editFlag = true;
  }

  displayComments() {
    this.comments = this.data.getComments();
  }

  update(updatedComment: any) {
    if (updatedComment.replyingTo) {
      for (let i = 0; i < this.comments.length; i++) {
        if (this.comments[i].replies.length > 0) {
          for (let j = 0; j < this.comments[i].replies.length; j++) {
            if (this.comments[i].replies[j].id === updatedComment.id) {
              this.comments[i].replies[j] = updatedComment;
              break;
            }
          }
        }
      }
    } else {
      for (let i = 0; i < this.comments.length; i++) {
        if (this.comments[i].id === updatedComment.id) {
          this.comments[i] = updatedComment;
          break;
        }
      }
    }
    this.data.saveState(this.comments);
    this.editFlag = false;
  }

  delete(comment: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      //delete method logic here
      if (comment.replyingTo) {
        for (let i = 0; i < this.comments.length; i++) {
          if (this.comments[i].replies.length > 0) {
            this.comments[i].replies = this.comments[i].replies.filter((replay: any) => replay.id !== comment.id);
          }
        }
      } else {
        this.comments = this.comments.filter((el: any) => el.id !== comment.id);
      }
      this.data.saveState(this.comments);
      location.reload();
    }

  }
}
