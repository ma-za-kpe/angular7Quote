import { Component, OnInit } from "@angular/core";

import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
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
}
