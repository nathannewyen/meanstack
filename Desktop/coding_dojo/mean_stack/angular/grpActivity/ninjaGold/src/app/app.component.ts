import { Component, OnInit, ViewChild } from "@angular/core";
import { HistoryComponent } from "./history/history.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: "ninjaGold";
  score: number;
  earngold: number;
  @ViewChild(HistoryComponent, null)
  private _historyComponent: HistoryComponent;

  ngOnInit() {
    this.score = 0;
    this.earngold = 0;
  }

  goldChanged(newScore: number): void {
    this.score = newScore;
    this._historyComponent.addHistory("You have " + this.score + " golds");
  }
}
