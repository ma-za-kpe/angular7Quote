import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AddQuoteComponent } from "./add-quote/add-quote.component";
import { QuoteComponent } from "./quote/quote.component";
import { VoteUpComponent } from './vote-up/vote-up.component';

@NgModule({
  declarations: [AppComponent, AddQuoteComponent, QuoteComponent, VoteUpComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
