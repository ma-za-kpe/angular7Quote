import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Quote } from "../quote";

@Component({
  selector: "app-vote-up",
  templateUrl: "./vote-up.component.html",
  styleUrls: ["./vote-up.component.css"]
})
export class VoteUpComponent implements OnInit {
  quote: Quote;
  count: number = 0;
  @Output() increaseQuote = new EventEmitter<number>();

  voteup() {
    this.count++;
    this.increaseQuote.emit(this.count);
  }

  constructor() {}

  ngOnInit() {}

  voteUp(): boolean {
    this.quote.votes += 1;
    return false;
  }
}
