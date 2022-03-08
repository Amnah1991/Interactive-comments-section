import { Component } from '@angular/core';
import data from "../../data.json";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  comments: Array<any> = data.comments; 

  title = 'Interactive Comments Section';

 
}
