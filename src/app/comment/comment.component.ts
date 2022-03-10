import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: any = {};
  currentUser: any = {};


  constructor(public data: DataService) {
  }

  ngOnInit(): void {
    this.currentUser = this.data.getCurrentUser();
  }

  replyAtcomment(comment: any): void {
    console.log(comment);
  }

}
