import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {
  history: Array<string>;
  historyEarn: Array<string>;
  constructor() {}

  ngOnInit() {
    this.history = [];
    this.historyEarn = [];
  }

  addHistory(action: string) {
    this.history.push(action);
    this.historyEarn.push(action);
  }
}
