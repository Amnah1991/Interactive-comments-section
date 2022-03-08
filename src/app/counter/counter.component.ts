import { Component, OnInit ,  Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() score: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incement(likes: number) {
    this.score++;
  }

  decrement(likes: number) {
    this.score--;
  }

}
