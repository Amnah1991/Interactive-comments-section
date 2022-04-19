import { Component, OnInit, Output } from '@angular/core';
import { DataService } from './data.service';
import data from '../../data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  comments: Array<any> = [];
  title = 'Interactive Comments Section';
  @Output() index: number;

  constructor(public data: DataService) {
    this.index = 0;
  }

  ngOnInit(): void {
    if (localStorage.length == 0) {
      localStorage.setItem('comments', JSON.stringify(data.comments));
      localStorage.setItem('currentUser', JSON.stringify(data.currentUser));
    }

    this.displayComments();
  }

  displayComments() {
    this.comments = this.data.getComments();
  }

}
