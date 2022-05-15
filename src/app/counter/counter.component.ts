import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent   {
  @Input() score: number = 0;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  

  constructor() { }

 

  incement() {
    this.score++;
    this.change.emit(this.score);
  }

  decrement() {
    this.score--;
    this.change.emit(this.score);
  }



}
