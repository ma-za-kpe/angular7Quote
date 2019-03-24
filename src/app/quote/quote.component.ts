import { Component, OnInit } from "@angular/core";

import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quote: Quote;
  quotes = [
    new Quote("Tweeting today", "paul", "paulo", 5),
    new Quote("Buy Cookies", "colio", "colo", 7),
    new Quote("Get new Phone Case", "kolo", "kolo", 3)
  ];
  constructor() {}

  ngOnInit() {}

  addNewQuote(quotes) {
    this.quotes.push(quotes);
  }

  // myCount: number = 10;
  IQuote(event) {
    this.quote.voteUp = event;
  }

  // IQuote(): boolean {
  //   this.quote.votes += 1;
  //   return false;
  // }
  voteDown(): boolean {
    this.quote.votes -= 1;
    return false;
  }
}
