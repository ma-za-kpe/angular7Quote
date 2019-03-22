import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AddQuoteComponent } from "./add-quote/add-quote.component";
import { QuoteComponent } from "./quote/quote.component";

@NgModule({
  declarations: [AppComponent, AddQuoteComponent, QuoteComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
