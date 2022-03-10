import { Component, OnInit } from '@angular/core';
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

  constructor(public data: DataService) {
  }

  ngOnInit(): void {
    if (localStorage.length == 0) {
      localStorage.setItem('comments', JSON.stringify(data.comments));
      localStorage.setItem('currentUser', JSON.stringify(data.currentUser));
      console.log('once');
    }

    this.displayComments();
  }

  displayComments() {
    this.comments = this.data.getComments();
  }

}
